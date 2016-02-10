(ns get-uppercase
  (:require [clojure.string :as str]))

(defn get-uppercase
  [instring]
  (str/replace instring #"\p{Lower}|\W|\d" ""))

(println (get-uppercase "$#A(*&987Zf"))
