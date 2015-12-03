(:ns permutation)

(def str1 "hello")
(def str2 "elhlo")
(def str3 "helllo")

(defn permutation [x y]
  (= (sort x) (sort y)))

(permutation str3 str2)
(permutation str1 str2)

(defn permutation? [str1 str2]
  (and (= (count str1) (count str2))
       (= (into #{} str1) (into #{} str2))))

(permutation? str3 str2) ; should be => false
(permutation? str1 str2) ; should be => true

