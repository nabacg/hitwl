(ns hit-wl.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [reagent-forms.datepicker
             :refer [parse-format format-date datepicker]]
            [ajax.core :refer [POST GET]]))

(enable-console-print!)

(defn console-log [str]
  (.log js/console str))


(def state (atom {:doc {} :edited-workout {} :saved? false}))

(defn save-state []
  (POST "/user/save"
        {:params (:doc @state)
         :format :json
         :handler (fn [_] (swap! state assoc :saved? true))}))

(defn get-userdata []
  (GET  "/user/data"
       {:format :json
        :handler (fn [{username "username" workouts "workouts" }]
                   (swap! state merge {:username username :workouts workouts}))}))

(defn set-value! [state-atom key value]
  (swap! state-atom assoc :saved? false)
  (swap! state-atom assoc-in key value))

(defn get-value [state-map key]
  (get-in state-map key))


(defn row [label & body]
  [:div.row
   [:div.col-md-2 [:span label]]
   [:div.col-md-3 body]])

(defn text-input [state-atom id label]
  [row label [:input {:type "text"
                      :class :form-control
                      :value (get-value @state-atom id)
                      :onChange #(set-value! state-atom
                                             id (-> % .-target .-value))}]])
                                        ;do a dropdown-item element
(defn dropdown-input [state-atom id label options]
  (let [selected-value (get-value @state-atom id)]
    ;(.log js/ console selected-value)
    [row label
     [:select {:class :form-control
               :onChange #(set-value! state-atom
                           id (-> % .-target .-value))}
      (for [[v display-value] options]
        (do
          ;;           (.log js/console (str v " " (= v selected-value)))
          (if (= v selected-value)
            [:option {:value v :selected "selected"} display-value]
            [:option {:value v } display-value])))]]))

(defn list-item [state-atom id k v states]
  (letfn [(handle-click! []
            (swap! (get states k) not)
            (set-value! state-atom id (->> states
                                  (filter (fn [[k v]] @v))
                                  (map first))))]
    [:li {:class (str "list-group-item" (if @(get states k) " active"))
          :on-click handle-click!}
     v]))

(defn selection-list [state-atom id label & items]
  (let [states (->> items
                    (map (fn [[k]] [k (atom false)]))
                    (into {}))]
    (fn []
      [row label
       [:ul.list-group
        (for [[k v] items]
          [list-item state-atom id k v states])]])))

(defn table-row [headers row]
  [:tr
   (for [h headers]
     (do
       [:td (str (row h))]))])

(defn draw-table [data]
  (let [headers (keys (first data))]
    [:div.row
     [:h1 "USERDATA"]
     [:table
      [:tr
       (for [header headers]
         [:th header])]]
     (for [row data]
       [table-row headers row])]))

(defn open-add-edit-workout []
  (swap! state update-in [:add-edit-workout-open?] not))

(defn main-user-panel [state-dict]
  [:div
   [:div.page-header
    [:h1 "HIT Workout Logger"]]
   [row "Username" (:username state-dict)]
   (if (not (:add-edit-workout-open? state-dict))
     [:button {:type "submit"
               :class "btn btn-default"
               :onClick open-add-edit-workout}
      "Add Workout"])
   [draw-table (:workouts state-dict)]])

(def edit-workout-form-template
  [:div
   (row "Date" [:datepicker {:field :datepicker :id :edited-workout.date}])
   (row "Notes" [:textarea {:field :textarea :id :edited-workout.comments}])
   [:div.form-group
    [:label "pick an option"]
    [:select.form-control {:field :list :id :edited-workout.excercise-type}
     [:option {:key :leg-press} "Leg Press"]
     [:option {:key :chest-press} "Chest Press"]
     [:option {:key :shoulder-press} "Shoulder Press"]
     [:option {:key :pull-down} "Pull Down"]
     [:option {:key :pull-back} "Pull back"]]
    [:button {:type "submit"
              :class "btn btn-default"
              :onClick #(let [new-workouts (conj (:workouts @state)
                                                 (->> (:edited-workout @state)
                                                      (map (fn [[k v]] [(name k) (str v)]))
                                                      (into {})))]
                          ;; (.log js/console (str  new-workouts))
                          ;;(.log js/console (str @state))
                                        ;transact!
                          (swap! state assoc :workouts new-workouts)
                          (swap! state assoc :edited-workout {})
                          (swap! state update-in [:add-edit-workout-open?] not)
                          (.log js/console (str (:workouts @state))))
              }
     "Save"]]])


(defn add-edit-workout-form [state-map]
  [:div.row
   [text-input [:edited-workout :date] "Date"]
   [text-input [:edited-workout  :comments] "Notes"]
   [selection-list  [:edited-workout :excercise-type] "Select type of Excercise"
    [:leg-press "Leg Press"]
    [:chest-press "Chest Press"]
    [:shoulder-press "Shoulder Press"]
    [:pull-down "Pull Down"]
    [:pull-back "Pull Back"]]])

(defn home []
  [:div
   [main-user-panel @state]
   ;; (if (:add-edit-workout-open? @state)
   ;;   [add-edit-workout-form @state])
   (if (:add-edit-workout-open? @state)
     [bind-fields edit-workout-form-template state])

   ;; [dropdown-input state [ :type] "Type of Excercise" [[:leg-press "Leg Press"]
   ;;                                                     [:chest-press "Chest Press"]
   ;;                                                     [:shoulder-press "Shoulder Press"]
   ;;                                                     [:pull-down "Pull Down"]
   ;;                                                     [:pull-back "Pull Back"]]]
   (if (:saved? @state)
     [:p "Saved"]
     [:button {:type "submit"
               :class "btn btn-default"
               :onClick save-state
               ;; #(.log js/console (str @state))
               }
      "Submit"])
   ])

(reagent/render-component [home] (.getElementById js/document "content"))

(get-userdata)
