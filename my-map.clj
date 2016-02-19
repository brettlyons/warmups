(ns my-map)

(defn my-map
  [fun sequ & total]
  (if (empty? sequ)
    (reverse total)
    (recur fun (rest sequ) (cons (fun (first sequ)) total))))

(println (my-map inc [1 2 3 4]))
