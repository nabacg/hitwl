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
                 [reagent-forms "0.2.4"]
                 [cljs-ajax "0.2.6"]
                 [json-html "0.2.3"]
                 [com.novemberain/monger "2.0.0"]
                 [com.cemerick/friend "0.2.1"]
                 [jarohen/nomad "0.7.0"]
                 [hiccup "1.0.5"]
                 [javax.servlet/servlet-api "2.5"]
                 [com.andrewmcveigh/cljs-time "0.2.4"]]
  :source-paths ["src/clj"]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-pdo "0.1.1"]
            [jarohen/lein-frodo "0.4.1"]]
  :aliases {"up" ["pdo" "cljsbuild" "auto" "dev," "frodo"]
            "prod-release" ["pdo" "cljsbuild" "once" "release," "frodo"]}
  :frodo/config-resource "config.edn"
  :cljsbuild {:repl-listen-port 9000
              :repl-launch-commands
              {
               "phantom" ["phantomjs"
                          "phantom/repl.js"
                          :stdout ".repl-phantom-out"
                          :stderr ".repl-phantom-err"]
                                     }
              :builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/app.js"
                                   :output-dir "resources/public/js/release"
                                   :optimizations :advanced
                                   :source-map "resources/public/js/app.js.map"}}]}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]
         :plugins [[com.cemerick/austin "0.1.5"]]}})
