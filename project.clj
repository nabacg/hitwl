(defproject hit-wl "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.9"]
                 [ring/ring-core "1.3.1"]
                 [ring/ring-json "0.3.1"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [reagent "0.4.2"]
                 [cljs-ajax "0.2.6"]
                 [com.novemberain/monger "2.0.0"]
                 [com.cemerick/friend "0.2.1"]
                 [hiccup "1.0.5"]]
  :source-paths ["src/clj"]
  :plugins [[lein-ring "0.8.12"]
            [lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-pdo "0.1.1"]]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "ring" "server" ]}
  :ring {:handler hit-wl.handler/app}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]]}})
