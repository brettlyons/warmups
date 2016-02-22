(ns my-map)

;; (defn my-map
;;   [fun sequ & total]
;;   (if (empty? sequ)
;;     (reverse (lazy-seq total))
;;     (recur fun (rest sequ) (cons (fun (first sequ)) total))))

(defn my-map
  [fun sequ]
  (lazy-seq (reduce (fn [accum current]
                      (cons accum (fun current))) sequ)))

;; maybe try cons (lazy-seq (^^^...)) ?? 
(println (my-map inc [1 2 3 4]))
(println (time (my-map inc [1 2 3 4])))

(println (time (->> (my-map inc (range))
        (drop (dec 1000000))
        (take 2))))
