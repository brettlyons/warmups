(:ns fibonacci)

(defn fibonacci [n]
  (if (= n 1)
    n
    (recur (- n 1))))

(println (fibonacci 10))
