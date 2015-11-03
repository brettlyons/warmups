(ns gameofthrees)

(defn gameOfThrees [n]
  (if (= n 1)
    ((println n)
    n)
    (if (= (mod (+ n 1) 3) 0)
      ((println (+ n 1) " 1")
        (gameOfThrees (+ n 1)))
      ((println (- n 1) " -1")
        (gameOfThrees (- n 1))))))

(gameOfThrees 100)
