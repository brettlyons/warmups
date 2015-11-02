(ns gameofthrees)

(defn gameOfThrees [n]
  (if (= n (or 1 - 1))
    (println n)
    n
    (if (= (mod (+ n 1)) 0)
      (println (+ n 1) " 1")
      (recur (+ n 1))
      (println (- n 1) " -1")
      (recur (- n 1)))))

(gameOfThrees 100)
