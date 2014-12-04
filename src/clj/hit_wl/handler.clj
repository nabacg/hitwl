(ns hit-wl.handler
  (:require [compojure.core :as compojure :refer [GET POST PUT DELETE defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.json :as ring-json]
            [ring.middleware.params :as ring-params]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.nested-params :as nested-params]
            [ring.middleware.session :as session]
            [ring.util.response
             :refer [resource-response response redirect status]]
            [ring.server.standalone :as server]
            [clojure.pprint :refer [pprint]]
            [hit-wl.mongodal :as db]
            [hiccup.page :as h]
            [hiccup.element :as e]
            [clojure.edn :as edn]
            [cemerick.friend :as friend]
            [clojure.java.io :as io]
            [cemerick.friend.openid :as openid]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [nomad :refer [defconfig]]
            [frodo.web :refer [App]])
  (:import java.net.URI))

(defconfig app-config (io/resource "config.edn"))

(def providers [{:name "Google" :url "https://www.google.com/accounts/o8/id"}
                {:name "Yahoo" :url "http://me.yahoo.com/"}
                {:name "AOL" :url "http://openid.aol.com/"}
                {:name "Wordpress.com" :url "http://username.wordpress.com"}
                {:name "MyOpenID" :url "http://username.myopenid.com/"}])

(defn is-dev? []
  (= :dev (:env app-config)))

(defn resolve-uri
  [context uri]
  (let [context (if (instance? URI context) context (URI. context))]
    (.resolve context uri)))

(defn context-uri
  "Resolves a [uri] against the :context URI (if found) in the provided
   Ring request.  (Only useful in conjunction with compojure.core/context.)"
  [{:keys [context]} uri]
  (if-let [base (and context (str context "/"))]
    (str (resolve-uri base uri))
    uri))

(def login-form
  [:div {:class "container"}

   [:form {:method "POST" :action "login" :class "form-signin" :role "form"}
    [:h2 {:class "form-signin-heading"} "Please sign in"]
    [:label {:for "username" :class "sr-only"} "Username"]
    [:input {:type :input :name "username" :id "username" :class "form-control"
             :placeholder "Username"
             :required true :autofocus true}]
    [:label {:for "password" :class "sr-only"} "Password"]
    [:input {:type "password" :id "password" :class "form-control" :placeholder "Password"
             :name "password"}]
    [:button {:class  "btn btn-lg btn-primary btn-block" :type :submit}
     "Sign in"]]])

(def pretty-head
  [:head
   [:link {:href "/user/css/bootstrap.min.css" :rel "stylesheet" :type "text/css"}]
   [:link {:href "/user/css/bootstrap-theme.min.css" :rel "stylesheet" :type "text/css"}]
   [:link {:href "/user/css/signin.css" :rel "stylesheet" :type "text/css"}]
         [:style {:type "text/css"} "ul { padding-left: 2em }"]
         [:script {:src "/user/js/bootstrap.min.js" :type "text/javascript"}]])

(defn pretty-body
  [& content]
  [:body
   (into [:div ] content)])

(defn get-db-config []
  (pprint (app-config))
  (:db-config (app-config)))


(defn open-id-login-form [req]
  [:div {:class "container"}
   [:h2 "Authenticating with various services using OpenID"]
   [:h3 "Current Status " [:small "(this will change when you log in/out)"]]
   (if-let [auth (friend/current-authentication req)]
     [:p "Some information delivered by your OpenID provider:"
      [:ul (for [[k v] auth
                 :let [[k v] (if (= :identity k)
                               ["Your OpenID identity" (str (subs v 0 (* (count v) 2/3)) "…")]
                               [k v])]]
             [:li [:strong (str (name k) ": ")] v])]]
     [:div
      [:h3 "Login with…"]
      (for [{:keys [name url]} providers
            :let [base-login-url (context-uri req (str "/login?identifier=" url))
                  dom-id (str (gensym))]]
        [:form {:method "POST" :action (context-uri req "login")
                :onsubmit (when (.contains ^String url "username")
                            (format "var input = document.getElementById(%s); input.value = input.value.replace('username', prompt('What is your %s username?')); return true;"
                                    (str \' dom-id \') name))}
         [:input {:type "hidden" :name "identifier" :value url :id dom-id}]
         [:input {:type "submit" :class "button" :value name}]])
      [:p "…or, with a user-provided OpenID URL:"]
      [:form {:method "POST" :action (context-uri req "login")}
       [:input {:type "text" :name "identifier" :style "width:250px;"}]
       [:input {:type "submit" :class "button" :value "Login"}]]])
   [:h3 "Logging out"]
   [:p [:a {:href (context-uri req "logout")} "Click here to log out"] "."]])

(defn get-userdata [username]
  {:username username
   :workouts (->> (db/get-all "workouts")
                  (filter #(= (:username %) username))
                  (map #(dissoc % :_id))
                  (map #(->> %
                             (map (fn [[k v]] [k (if (= k :date) v
                                                    (edn/read-string v))]))
                             (into {})))
                  (into []))})

(defn save-document [{username :username workouts :workouts :as state-map}]
  (pprint state-map)

  (db/save (->> workouts
                (filter :is-new?)
                (map #(assoc % :username username))
                (map #(dissoc % :is-new?)))
           "workouts"))

(defroutes app-routes
  (GET "/" [] (h/html5 pretty-head (pretty-body
                                   [:a {:href "/signin"} "Login"])))
  (GET "/user/profile" []
       (friend/authenticated
                         (slurp "resources/public/html/index.html")))
  (GET "/user/data" request
       (friend/authenticated
                         (->
                          (:email (friend/current-authentication))
                          (get-userdata)
                          response)))
  (POST "/user/save" {body :body}
        (friend/authenticated
                          (do (save-document body)
                              (response
                               {:status  "OK"}))))
  (GET "/signin" request
       (h/html5
        pretty-head
        (pretty-body (open-id-login-form request))))
  (GET "/login2" request
       (h/html5 pretty-head (pretty-body login-form)))
  (GET "/logout" req
    (friend/logout* (redirect (str (:context req) "/"))))
  (GET "/ping" [] (response "pong!"))
  (route/resources "/user")
  (route/not-found "Not Found"))



; a dummy in-memory user "database"
(def users {"root" {:username "root"
                    :password (creds/hash-bcrypt "admin_password")
                    :roles #{::admin}}
            "Stefan" {:username "Stefan@at.at"
                    :password (creds/hash-bcrypt "stefan123")
                      :roles #{::user}}
            "stef@at.at" {:username "stef@at.at"
                          :password (creds/hash-bcrypt "stef")
                          :roles #{::user}}})

(comment
    (GET "/austin-connect-browser-repl.js" []
         (if (is-dev?)
           (cemerick.austin.repls/browser-connected-repl-js)
           (response ""))))


(comment
  (defn init-cljs-repl []
            (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                                  (cemerick.austin/repl-env)))
            (pprint repl-env))

          (comment
            (-> js/document .-body (.setAttribute "style" "background:white")))

          (defn start-cljs-repl
            "this will start cljs repl inside clj repl
   which will work from cider only if server was started from same
   repl as they need to share repl-env var set session"[]
   (cemerick.austin.repls/cljs-repl hit-wl.handler/repl-env)))

(defn init-middleware [handler]
  ;;dummy middleware handler to execute some init logic on app startup
  (db/init (get-db-config))
  (comment
    (when (is-dev?)
      (init-cljs-repl)))
  handler)

(def app
  (-> (handler/site app-routes)
      (init-middleware)
      (friend/authenticate {:allow-anon? true
                            :default-landing-uri "/user/profile"
                            :unauthorized-handler #(do
                                                     ( println (friend/current-authentication))
                                                     ( -> (h/html5 [:h2 "You do not have sufficient privileges to access " (:uri %)])
                                                          response
                                                          (status 401)))
                            :workflows [(openid/workflow
                                         :openid-uri "/login"
                                         :credential-fn identity)]})
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)
      (keyword-params/wrap-keyword-params)
      (nested-params/wrap-nested-params)
      (ring-params/wrap-params)
      (session/wrap-session)
      ))


(defn start-server [port]
  (server/serve #'app
                {:port port
                 :join? false
                 :open-browser? false}))

(def frodo-app (reify App
                 (start! [_]
                   (do
                     (println " starting app")
                     {:frodo/handler app}))
                 (stop! [_ system]
                   (println "stopping app"))))
