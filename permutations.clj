(:ns permutation)

(def str1 "hello")
(def str2 "elhlo")
(def str3 "helllo")

(defn permutation [x y]
  (= (sort x) (sort y)))

(permutation str3 str2)
(permutation str1 str2)
