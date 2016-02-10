(ns my-intersection)

(defn my-intersection [set1 set2]
  (set (filter #(contains? set2 %) set1)))

(println (my-intersection #{1 2 3} #{2 3 4}))
