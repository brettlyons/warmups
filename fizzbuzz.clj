(ns fizzbuzz)

(defn fizzbuzz
  "Returns fizzbuzz if the modulo 15 of the input is zero, fizz if it's 5, buzz if it's 3"
  [n]
  (if (= (mod n 15) 0)
    (println "fizzbuzz")
    (if (= (mod n 5) 0)
      (println "fizz")
      (if (= (mod n 3) 0)
        (println "buzz")
        (println n)))))


(dotimes [n 101] (fizzbuzz n))
