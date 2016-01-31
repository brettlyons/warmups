;; (= (__ [1 2 3 4 5]) [5 4 3 2 1])

(defn rev [seq & tot]
  (let [x (first seq) xs (rest seq) total (or tot [])]
    (if (not-empty xs)
      (recur xs (cons x total))
      (cons x total))))

(println (rev [1 2 3 4 5]))
