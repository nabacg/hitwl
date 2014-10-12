(ns hit-wl.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)


(println "hello HIT world!")


(defn home-2 []
  [:div
   [:div.page-header [:h1 "HIT Workout Logger"]]])



(def state (atom {:doc {} :saved? false}))

(defn set-value! [id value]
  (swap! state assoc :saved? false)
  (swap! state assoc-in [:doc id] value))

(defn get-value [id]
  (get-in @state [:doc id]))


(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input [id label]
  [row label [:input {:type "text"
                      :class :form-control
                      :value (get-value id)
                      :onChange #(set-value! id (-> % .-target .-value))}]])

(defn list-item [id k v states]
  (letfn [(handle-click! []
            (swap! (get states k) not)
            (set-value! id (->> states
                                  (filter (fn [[k v]] @v))
                                  (map first))))]
    [:li {:class (str "list-group-item" (if @(get states k) " active"))
          :on-click handle-click!}
     v]))

(defn selection-list [id label & items]
  (let [states (->> items
                    (map (fn [[k]] [k (atom false)]))
                    (into {}))]
    (fn []
      [row label
       [:ul.list-group
        (for [[k v] items]
          [list-item id k v states])]])))

(defn home []
  [:div
   [:div.page-header [:h1 "Reagent Sandbox"]]
   [text-input :first-name "First name"]
   [text-input :sur-name "Surname"]
   [selection-list :fav-snacks "Favourite Snacks"
    [:beef "Beef"]
    [:lamb "Lamb"]
    [:cheese "Cheese"]]
   [:button {:type "submit"
             :class "btn btn-default"
             :onClick #(.log js/console (str @state))}
    "Submit"]])

(reagent/render-component [home] (.getElementById js/document "content"))
