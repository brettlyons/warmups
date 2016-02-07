(ns my-interleave)

(defn my-interleave
  [seq1 seq2 & final]
  (if (or (empty? seq1) (empty? seq2))
    final
    (recur (rest seq1) (rest seq2) (cons (first seq1) (first seq2)))))

(println (my-interleave [1 2 3 4] [:a :b :c]))
