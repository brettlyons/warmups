(ns my-replicate)

(defn my-replicate
  [sequ rep-count & accum]
  (if (empty? sequ)
    (remove nil? (flatten accum))
    (recur (rest sequ) rep-count (cons accum (repeat rep-count (first sequ))))))

(println (my-replicate [:a :b] 3))
