(ns my-replicate)

;; (defn my-replicate
;;   [sequ rep-count & accum]
;;   (if (empty? sequ)
;;     (remove nil? (flatten accum))
;;     (recur (rest sequ) rep-count (cons accum (repeat rep-count (first sequ))))))

;; (defn my-replicate
;;   [sequ rep-count]
;;   (reduce (fn [accum current]
;;             (cons accum (repeat rep-count current))) sequ))

(defn my-replicate
  [sequ rep-count]
    (for [elem sequ]
      (repeat rep-count elem)))

(println (my-replicate [:a :b] 3))
(println (my-replicate [[1 2] [3 4]] 4))
