(ns hit-wl.handler
  (:require [compojure.core :refer [GET POST PUT DELETE defroutes]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.middleware.json :as ring-json]
            [ring.util.response :refer [resource-response response]]))

(defroutes app-routes
  (GET "/" [] (slurp "resources/public/html/index.html"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> (handler/site app-routes)
      (ring-json/wrap-json-body)
      (ring-json/wrap-json-response)))
