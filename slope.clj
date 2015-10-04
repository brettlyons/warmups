(ns Slope)

(defn slope [v]
	(if (= (- (first v) (first (rest (rest v)))) 0)
    (str "undefined")
    (str (/ (- (first (rest v)) (last v)) (- (first v) (first (rest (rest v))))))))


(ns waiting-room)

(comment
  small koans from a relatively well known code training website.
)
(defn last-chair [n]
	(- n  1)
)

(ns penultimate)

(defn penultimate
  "Gets the second to last element of an ISeq"
  [lst]
	(second (reverse lst))
)
