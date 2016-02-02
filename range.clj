(ns my-range)

(defn my-range [start stop & tot]
  (println (str "total" tot))
  (let [total (or tot '())]
    (if (= (dec stop) (first total))
      (reverse total)
      (recur (inc start) stop (cons start total)))))

(println (my-range -1 10))
