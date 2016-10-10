(ns pmap-test.clj)

(def alphabet-length 26)

(def letters (mapv (comp str char (partial + 65)) (range alphabet-length)))

(defn random-string
  "Returns a random string of specified length"
  [length]
  (apply str (take length (repeatedly #(rand-nth letters)))))

(defn random-string-list
  [list-length string-length]
  (doall (take list-length (repeatedly (partial random-string string-length)))))

;; (def orc-names (random-string-list 3000 7000))
(def orc-names (random-string-list 20000 300))

(time (dorun (map clojure.string/lower-case orc-names)))

(time (dorun (pmap clojure.string/lower-case orc-names)))

