(ns hit-wl.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-forms.core :refer [bind-fields]]
            [reagent-forms.datepicker
             :refer [parse-format format-date datepicker]]
            [ajax.core :refer [POST GET]]
            [json-html.core :refer [edn->hiccup]]
            [clojure.browser.repl :as repl]
            [cljs-time.core :as dt]))

(enable-console-print!)

(repl/connect "http://localhost:9000/repl")


(defn console-log [item]
  (.log js/console (str item)))


(def state (atom {:doc {}
                  :edited-workout {:excercises []}
                  :current-view :main-user-panel
                  :saved? false}))

(defn save-state []
  (POST "/user/save"
        {:params  @state
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


(defn list-items [lst]
  [:ul.list-group
   (for [i lst]
     [:li.list-group-item
      (str i)
      (comment  (if (coll? i)
                  (list-items i)
                  (str i)))])])

(defn table-row [headers row]
  [:tr
   (for [h headers]
     (do
       [:td (if (coll? (row h))
                    (list-items (row h))
                    (str  (row h)))]))])

(defn draw-table [data]
  (let [headers (keys (first data))]
    [:div.row
     [:table.table.table-hover.table-bordered
      [:tr
       (for [header headers]
         [:th header])]
      (for [row data]
        [table-row headers row])]]))

(defn get-current-date-map []
  (let [now (dt/now)]
    {:year (dt/year now)
     :month (dt/month now)
     :day (dt/day now)}))

(defn open-add-edit-workout []
  (console-log (dt/today))
  (console-log (dt/date-time 2014 11 12))
  (comment  (let [now (dt/time-now)
                  y (dt/year now)
                  m (dt/month (.getMonth now))
                  d (dt/day now)]))
  (swap! state #(->  %
                     (assoc-in [:edited-workout :date] (get-current-date-map))
                     (assoc :current-view :add-workout-panel))))

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
   [:h2 "Workouts"]
   [draw-table (:workouts state-dict)]

   (if (:saved? state-dict)
     [:p "Saved"]
     [:button {:type "submit"
               :class "btn btn-default"
               :onClick save-state}
      "Submit"])])

(defn append-new-workout []
  (let [new-workouts (conj (:workouts @state)
                           (->> (:edited-workout @state)
                                (map (fn [[k v]] [(name k) (str v)]))
                                (into {:is-new? true})))]

    (swap! state #(-> %
                     (assoc :workouts new-workouts)
                     (assoc :edited-workout {})
                     (assoc :current-view :main-user-panel)))
    (console-log (:workouts @state))))

(defn draw-excercise-panel []
  (for [e (get-in @state [:edited-workout :excercises])]
    (row (str e)
         [:input.form-control
          {:field :numeric :id (keyword (str :edited-workout.excercises e))}])))

(def add-excercise-form
  [:div
   [:h3 "Add Exercise"]
   [:div.row
    [:div.col-md-2
     [:ul.list-group
      {:field :single-select :id :edited-workout.new.exercise-type}
      [:li.list-group-item  {:key :leg-press} "Leg Press"]
      [:li.list-group-item  {:key :chest-press} "Chest Press"]
      [:li.list-group-item  {:key :shoulder-press} "Shoulder Press"]
      [:li.list-group-item  {:key :pull-down} "Pull Down"]
      [:li.list-group-item  {:key :pull-back} "Pull back"]]]
    [:div.col-md-8
     [:div.row
      [:div.col-md-1 [:span "Reps"]]
      [:div.col-md-1
       [:input.form-control
        {:field :numeric :id :edited-workout.new.reps}]]
      [:div.col-md-1 [:span "TUL"]]
      [:div.col-md-1
       [:input.form-control
        {:field :numeric :id :edited-workout.new.TUL}]]
      [:div.col-md-1 [:span "Technique"]]
      [:div.col-md-2
       [:select.form-control {:field :list :id :edited-workout.new.technique}
        [:option {:key :super-slow} "Super Slow"]
        [:option {:key :rest-pause} "Rest Pause"]
        [:option {:key :standard} "Standard"]]]
      [:div.col-md-1 [:span "Notes"]]
      [:div.col-md-2
       [:textarea {:field :textarea :id :edited-workout.new.comments}]]]
     [:div.row
      [:div.col-md-4
       [:button {:type "submit"
                 :class "btn btn-default"
                 :onClick #(let [new-item (->>  (get-in @state [:edited-workout :new])
                                                (map (fn [[k v]] [(name k) (str v)]))
                                                (into {}))
                                 new-list (conj (get-in @state [:edited-workout :excercises])
                                                new-item)]
                             (swap! state update-in
                                    [:edited-workout :excercises] conj new-item)
                             (console-log new-list)
                             (console-log  (get-in @state [:edited-workout]))
                             (swap! state assoc-in [:edited-workout :new] nil)
                             )}
        "Add"]]]] ]


   [:div.row
    [:button.col-md-4 {:type "submit"
              :class "btn btn-default"
              :onClick append-new-workout}
     "Save"]
    [:button.col-md-4 {:type "submit"
              :class "btn btn-default"
              :onClick #(swap! state update-in [:add-edit-workout-open?] not)}
     "Cancel"]]])

   [:div.form-group
    [:label "pick an option"]
    [:select.form-control {:field :list :id :edited-workout.excercise-type}
     [:option {:key :leg-press} "Leg Press"]
     [:option {:key :chest-press} "Chest Press"]
     [:option {:key :shoulder-press} "Shoulder Press"]
     [:option {:key :pull-down} "Pull Down"]
     [:option {:key :pull-back} "Pull back"]]]

(def edit-workout-template
  [:div
   [:h3 "Add new workout"]
   [:div.row
    [:div.col-md-6 [:span  "Date"]]
    [:div.col-md-6 [:input {:field :datepicker :id :edited-workout.date}]]]
   [:div.row
    [:div.col-md-6 [:span "Notes"]]
    [:div.col-md-6 [:textarea.span6
                    {:field :textarea :id :edited-workout.comments}]]]
   [:div.row]
   [:div.row
    [:div.col-md-6
     [:button.btn.btn-block
      {:onClick   #(swap! state (fn [old-state]
                                  (-> old-state
                                      (assoc :current-view :main-user-panel)
                                      (assoc :edited-workout {}))))}
      "Cancel"]]
    [:div.col-md-6
     [:button.btn.btn-block.btn-primary
      {:onClick #(swap! state (fn [old-state]
                                (-> old-state
                                    (assoc :current-view :add-excercise-panel)
                                    (update-in [:edited-workout :new] {}))))}
       "Add Excercise"]]]])

(def add-excercise-template
  [:div
   [:div.row
    [:div.col-md-12
     [:h3 "New Excercise"]]]
   [:div.row
    [:div.col-md-6
     [:span "Type"]]
    [:div.col-md-4
     [:ul.list-group
      {:field :single-select :id :edited-workout.new.exercise-type}
      [:li.list-group-item  {:key :leg-press} "Leg Press"]
      [:li.list-group-item  {:key :chest-press} "Chest Press"]
      [:li.list-group-item  {:key :shoulder-press} "Shoulder Press"]
      [:li.list-group-item  {:key :pull-down} "Pull Down"]
      [:li.list-group-item  {:key :pull-back} "Pull back"]]]]
   [:div.row
      [:div.col-md-1 [:span "Reps"]]
      [:div.col-md-1
       [:input.form-control
        {:field :numeric :id :edited-workout.new.reps}]]]
   [:div.row
    [:div.col-md-1 [:span "TUL"]]
    [:div.col-md-1
     [:input.form-control
      {:field :numeric :id :edited-workout.new.TUL}]]]
   [:div.row
    [:div.col-md-1 [:span "Technique"]]
    [:div.col-md-2
     [:select.form-control {:field :list :id :edited-workout.new.technique}
      [:option {:key :super-slow} "Super Slow"]
      [:option {:key :rest-pause} "Rest Pause"]
      [:option {:key :standard} "Standard"]]]]
   [:div.row
    [:div.col-md-1 [:span "Notes"]]
    [:div.col-md-2
     [:textarea {:field :textarea :id :edited-workout.new.comments}]]]

   [:div.row
    [:div.col-md-4
     [:button.btn.btn-block
      {:onClick   #(swap! state (fn [old-state]
                                  (-> old-state
                                      (assoc :current-view :main-user-panel)
                                      (assoc :edited-workout {}))))}
      "Cancel"]]
    [:div.col-md-4
     [:button.btn.btn-block.btn-primary
      {:onClick #(swap! state (fn [old-state]
                                (-> old-state
                                    (assoc :current-view :add-excercise-panel)
                                    (update-in [:edited-workout :excercises] conj
                                               (get-in old-state [:edited-workout :new]))
                                    (update-in [:edited-workout :new] {:excercises []}))))}
      "Add Another Excercise"]]
    [:div.col-md-4
     [:button.btn.btn-block
      {:onClick append-new-workout}
      "Finish & Save"]]]])



(defn home []
  [:div
   (if (= (:current-view @state) :main-user-panel)
     [main-user-panel @state])
   [:div.row
    (if (= (:current-view @state) :add-excercise-panel)
      [bind-fields
       add-excercise-template
       state]
      [:div "NOOOO"])
    (if (= (:current-view @state) :add-workout-panel)
      [bind-fields
       edit-workout-template
       state])]
   (comment
     (if (:add-edit-workout-open? @state)
       [:div
        [bind-fields
         edit-workout-template
         state]
        [:h3 "Excercises"]
        [draw-table (get-in @state [:edited-workout :excercises])]
        [bind-fields
         add-excercise-form
         state]]))

   [:hr]
   [:h1 "State"]
   [edn->hiccup @state]])

(reagent/render-component [home] (.getElementById js/document "content"))

(get-userdata)
