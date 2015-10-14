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

(reduce * (range 1 8))
(reduce *' (range 1 62))

(take 1000 (repeat "websites"))

(= (last (sort (rest (reverse [2 5 4 1 3 6]))))
  (-> [2 5 4 1 3 6] (reverse) (rest) (sort) (last))
   5)


(defn checkPali [x]
   (if (= (class x) clojure.lang.PersistentVector)
      (= first last)
      (= (map str (reverse (str x))) (map str x))))

(checkPali [:foo :bar :foo])


(defn dbl [x]
  (for [x [%]])
     (cons [x] [x]))
