(ns factorial)

(defn factorial [x]
  (apply * (range 1 (+ x 1))))

(println (factorial 5))

