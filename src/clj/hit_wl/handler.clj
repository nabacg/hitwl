(ns hit-wl.handler
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.json :as ring-json]
            [ring.util.response :refer [resource-response response]]
            [clojure.pprint :refer [pprint]]
            [hit-wl.mongodal :as db]))

                                        ;todo
                                        ;get a list from mongo
                                        ;send this list to UI
                                        ;display a list in a React Widget

(def heroku-mongo-connection-uri "")

(defn init [env]
  (db/init {:collection-name "flatdata"
            :db-name "hit-wl-db"
            :uri (if (= env :prod) heroku-mongo-connection-uri nil)}))


(defn save-document [doc]
  (pprint doc)
  (db/save  doc "data"))



(defroutes app-routes
  (GET "/" [] (slurp "resources/public/html/index.html"))
  (POST "/save" {body :body} (do (save-document body)
                               (response
                                {:status  "OK"})))
  (GET "/setup" [] (do  (init :dev) (response {:status "inited"})))
  (GET "/ping" [] (response "pong!"))
  (route/resources "/")
  (route/not-found "Not Found"))



(def app
  (-> (handler/site app-routes)
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)))
