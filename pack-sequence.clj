(ns my-pack-seq)

(defn pack-seq
  [sequ]
  (partition-by identity sequ))

