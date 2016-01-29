(ns factorial)

(defn factorial [x]
  (reduce * (range 1 (+ x 1))))

(println (factorial 10))

