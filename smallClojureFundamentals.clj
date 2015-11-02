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


(defn dupe [x]
  (flatten (map (fn [y] (repeat 2 y)) x)))

(dupe '(1 2 3 4))

(fn [x] (flatten (map (fn [y] (repeat 2 y)) x)))

(defn dub [x]
  (repeat 2 x))

(defn otherdupe [g]
  (reduce
   (fn [r x] conj r (repeat 2 x))
     []
     g)))

(defn fordupe [x]
  (let [accum []]
    (for [y x]
      (cons accum (repeat 2 y)))
  accum))


(dub [1 2 3])

(fordupe [[1 2] [3 4]])

(fordupe [1 2 3])


(defn highest-rank
  [data]
  (key (apply max-key val (frequencies data))))


(highest-rank [3 2 3 2 1 1 1 1 1 1])


(defn somefunc [coll]
  (let [gp (group-by identity coll)]
    (zipmap (keys gp) (map #(count (second %)) gp))))

(defn compress [somecol]
  (reduce (fn [total ele]
            (println (last total))
            (if (not= (last total) ele)
              total
              (conj total ele)))
          [somecol]))
(compress [1 1 2 2 2 3 4 1 5 2 3 4])

(apply str (compress "leeerroooy"))

;; testing something else
(def test-address
  {:street-address "123 Test Lane"
   :city "Testerville"
   :state "TX"})

(let [{street-address :street-address, city :city, state :state} test-address]
test-address (str street-address " " city " " state))

(let [{:keys [street-address city state]} test-address] (str street-address " " city " " state))

(["Test" "Testerson"] test-address)
