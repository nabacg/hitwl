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
            [clojure.pprint :refer [pprint]]
            [hit-wl.mongodal :as db]
            [hiccup.page :as h]
            [hiccup.element :as e]
            [cemerick.friend :as friend]
            [clojure.java.io :as io]
            (cemerick.friend [workflows :as workflows]
                             [credentials :as creds])
            [nomad :refer [defconfig]]
            [frodo.web :refer [App]]))

(defconfig app-config (io/resource "config.edn"))

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

(defn get-db-config []
  (pprint (app-config))
  (:db-config (app-config)))

(defn init-middleware [handler]
  ;;dummy middleware handler to execute some init logic on app startup
  (db/init (get-db-config))
  handler)

(defn get-userdata [username]
  {:username username
   :workouts (->> (db/get-all "workouts")
        (filter #(= (:username %) username))
        (map #(dissoc % :_id))
        (into []))})

(defn save-document [{username :username workouts :workouts :as state-map}]
  (pprint state-map)

  (db/save (->> workouts
                (filter :is-new?)
                (map #(assoc % :username username))
                (map #(dissoc % :is-new?))
                ) "workouts"))

(defroutes app-routes
  (GET "/" [] (h/html5 pretty-head (pretty-body
                                   [:a {:href "/login"} "Login"])))
  (GET "/user/profile" []
       (friend/authorize #{::user}
                         (slurp "resources/public/html/index.html")))
  (GET "/user/data" request
       (friend/authorize #{::user}
                         (->
                          (:username (friend/current-authentication))
                          (get-userdata)
                          response)))
  (POST "/user/save" {body :body}
        (friend/authorize #{::user}
                          (do (save-document body)
                              (response
                               {:status  "OK"}))))
  (GET "/login" request
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
            "Stefan" {:username "Stefan"
                    :password (creds/hash-bcrypt "stefan123")
                    :roles #{::user}}})

(def app
  (-> (handler/site app-routes)
      (init-middleware)
      (friend/authenticate {:allow-anon? true
                            :login-uri "/login"
                            :default-landing-uri "/user/profile"
                            :unauthorized-handler #(do
                                                     ( println (friend/current-authentication))
                                                     ( -> (h/html5 [:h2 "You do not have sufficient privileges to access " (:uri %)])
                                                          response
                                                          (status 401)))
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


(def frodo-app (reify App
                 (start! [_]
                   (do
                     (println " starting app")
                     {:frodo/handler app}))
                 (stop! [_ system]
                   (println "stopping app"))))
