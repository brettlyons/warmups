(ns my-max)

;; (defn my-max
;;   ([seq & rest]
;;    (my-max seq (first seq)))
;;   ([seq current-max & rest]
;;    (if (empty? seq)
;;      current-max
;;      (if (> (first seq) current-max)
;;        (recur (rest seq) (first seq) rest)
;;        (recur (rest seq) current-max rest)))))

(defn my-max
  [fir & rem]
  (if (empty? rem)
    fir
    (if (> fir (first rem))
      (recur fir (rest rem))
      (recur (first rem) (rest rem)))))

(println (my-max 1 2 3 4 8 4))
(println (my-max 3 29 19 27))
