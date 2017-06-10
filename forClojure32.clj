(ns Duplicate)

(comment
(defn dupe [g]
  (for [x [g]]
   (fn [r x]
     (println r x)
     (apply conj r (repeat 2 x)))
   []
   g))
)

(defn dupe [g]
  (reduce
   (fn [r x] (apply conj r (repeat 2 x)))
   []
   g))

(comment
  "this works"
  "the key was to use apply"
  )

(dupe [1 2 3])
(dupe [[1 2][3 4]])
