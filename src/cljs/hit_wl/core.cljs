(ns hit-wl.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [POST GET]]))

(enable-console-print!)


(println "hello HIT world!")


(defn home-2 []
  [:div
   [:div.page-header [:h1 "HIT Workout Logger"]]])

(def state (atom {:doc {} :saved? false}))

(defn save-state []
  (POST "/save"
        {:params (:doc @state)
         :format :json
         :handler (fn [_] (swap! state assoc :saved? true))}))



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
   [text-input :date "Date"]
   [text-input :comments "Comments"]
   [selection-list :excercise-type "Select type of Excercise"
    [:leg-press "Leg Press"]
    [:chest-press "Chest Press"]
    [:shoulder-press "Shoulder Press"]
    [:pull-down "Pull Down"]
    [:pull-back "Pull Back"]]
   (if (:saved? @state)
     [:p "Saved"]
     [:button {:type "submit"
               :class "btn btn-default"
               :onClick save-state
               ;; #(.log js/console (str @state))
              }
      "Submit"])])

(reagent/render-component [home] (.getElementById js/document "content"))
