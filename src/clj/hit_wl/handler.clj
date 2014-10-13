(ns hit-wl.handler
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.json :as ring-json]
            [ring.util.response :refer [resource-response response]]
            [clojure.pprint :refer [pprint]]))

(defn save-document [doc]
  (pprint doc))



(defroutes app-routes
  (GET "/" [] (slurp "resources/public/html/index.html"))
  (POST "/save" {body :body} (do (save-document body)
                               (response
                                {:status  "OK"})))
  (GET "/ping" [] (response "pong!"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (handler/site app-routes)
      (ring-json/wrap-json-body {:keywords? true})
      (ring-json/wrap-json-response)))
