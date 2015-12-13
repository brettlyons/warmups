(ns oneEditAway
  (require [clojure.test :as test]))

(test/is (= (oneAway "pale" "ple") true))
(test/is (= (oneAway "pales" "pale") true))
(test/is (= (oneAway "pale" "bale") true))
(test/is (= (oneAway "pale" "bake") false))
;(test/is (= (oneAway "ehlo" "hello") false))

(defn abs [n] (max n (- n)))

(defn oneAway [str1 str2]
  (let [firstset (into #{} str1) secondset (into #{} str2)
        awayby (abs (- (count str1) (count str2)))]
;    (println awayby firstset secondset (clojure.set/difference firstset secondset))
    (if (and (= firstset secondset) (< awayby 2))
      true
      (< (count (clojure.set/difference firstset secondset)) 2))))
