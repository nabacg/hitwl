(ns hit-wl.handler
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.json :as ring-json]
            [ring.middleware.params :as ring-params]
            [ring.middleware.keyword-params :as keyword-params]
            [ring.middleware.nested-params :as nested-params]
            [ring.middleware.session :as session]
            [ring.util.response
             :refer [resource-response response redirect status]]
            [clojure.pprint :refer [pprint]]
            [hit-wl.mongodal :as db]
            [hiccup.page :as h]
            [hiccup.element :as e]
            [cemerick.friend :as friend]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])))

                                        ;todo
                                        ;get a list from mongo
                                        ;send this list to UI
                                        ;display a list in a React Widget

(def heroku-mongo-connection-uri "")

(def login-form
  [:div {:class "row"}
   [:div {:class "columns small-12"}
    [:h3 "Login"]
    [:div {:class "row"}
     [:form {:method "POST" :action "login" :class "columns small-4"}
      [:div "Username" [:input {:type "text" :name "username"}]]
      [:div "Password" [:input {:type "password" :name "password"}]]
      [:div [:input {:type "submit" :class "button" :value "Login"}]]]]]])

(def pretty-head
  [:head [:link {:href "/css/normalize.css" :rel "stylesheet" :type "text/css"}]
         [:link {:href "/css/foundation.min.css" :rel "stylesheet" :type "text/css"}]
         [:style {:type "text/css"} "ul { padding-left: 2em }"]
         [:script {:src "/js/foundation.min.js" :type "text/javascript"}]])

(defn pretty-body
  [& content]
  [:body {:class "row"}
   (into [:div {:class "columns small-12"}] content)])

(defn init [env]
  (db/init {:collection-name "flatdata"
            :db-name "hit-wl-db"
            :uri (if (= env :prod) heroku-mongo-connection-uri nil)}))

(defn get-userdata [username]
  (println "AA " username )
  (->> (db/get-all "flatdata")
       (filter #(= (:first-name %) username))
       (map #(dissoc % :_id))))

(defn save-document [doc]
  (pprint doc)
  (db/save [doc] "flatdata"))



(defroutes app-routes
  (GET "/" [] (slurp "resources/public/html/index.html"))
  (GET "/login" request
       (h/html5 pretty-head (pretty-body login-form)))
  (GET "/logout" req
    (friend/logout* (redirect (str (:context req) "/"))))
  (GET "/requires-authentication" req
       (friend/authenticated (str
                              "Thanks for authenticating!"
                              (nil? (friend/identity req))
                              "..."
                              (friend/current-authentication))))
  (GET "/role-user" req
    (friend/authorize #{::user} "You're a user!"))
  (GET "/role-admin" req
    (friend/authorize #{::admin} "You're an admin!"))
  (GET "/userprofile" req
       (do
         (println "BB "  (friend/current-authentication))
         (->
          {:workouts (get-userdata "Stefan")}
          (assoc :username "Stefan")
          response)))
  (POST "/save" {body :body} (do (save-document body)
                               (response
                                {:status  "OK"})))
  (GET "/setup" [] (do  (init :dev) (response {:status "inited"})))
  (GET "/ping" [] (response "pong!"))
  (route/resources "/")
  (route/not-found "Not Found"))

; a dummy in-memory user "database"
(def users {"root" {:username "root"
                    :password (creds/hash-bcrypt "admin_password")
                    :roles #{::admin}}
            "Stefan" {:username "Stefan"
                    :password (creds/hash-bcrypt "stefan123")
                    :roles #{::user}}})

(def app
  (-> (handler/site app-routes)
      (friend/authenticate {:allow-anon? true
                            :login-uri "/login"
                            :default-landing-uri "/"
                            :unauthorized-handler #(-> (h/html5 [:h2 "You do not have sufficient privileges to access " (:uri %)])
                                        response
                                        (status 401))
                            :credential-fn
                            (partial creds/bcrypt-credential-fn users)
                            :workflows [(workflows/interactive-form)]})
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)
      (keyword-params/wrap-keyword-params)
      (nested-params/wrap-nested-params)
      (ring-params/wrap-params)
      (session/wrap-session)
      ))
