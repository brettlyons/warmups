(ns oneEditAway
  (require [clojure.test :as test]))

(test/is (= (oneAway "helo" "hello") true))
(test/is (= (oneAway "helo" "halo") true))
(test/is (= (oneAway "hello" "halo") false))
(test/is (= (oneAway "hello" "germs") false))

(defn abs [n] (max n (- n)))

(defn oneAway [str1 str2]
  (let [firstmap (into #{} str1) secondmap (into #{} str2)
        awayby (abs (- (count str1) (count str2)))]
    (if (and (= firstmap secondmap) (< awayby 2))
      true
      (< (+ awayby (count (clojure.set/difference firstmap secondmap))) 2))))
