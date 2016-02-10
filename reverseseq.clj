(ns rev-a-seq-4clojure)

(defn rev [seq & tot]
  (let [x (first seq) xs (rest seq) total (or tot [])]
    (if (not-empty xs)
      (recur xs (cons x total))
      (cons x total))))

(println (rev [1 2 3 4 5]))
