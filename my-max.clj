(ns my-max)

(defn my-max
  ([seq]
   (my-max seq (first seq)))
  ([seq current-max]
   (if (empty? seq)
     current-max
     (if (> (first seq) current-max)
       (recur (rest seq) (first seq))
       (recur (rest seq) current-max)))))

(println (my-max [1 2 3 4 8 4]))
