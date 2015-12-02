;(:ns oneEditAway)

(def st1 "helo") 
(def st2 "hello")
(def st3 "halo") 
(def st4 "germs")
(def st5 "learn")

(defn oneAway [str1 str2]
  (let [firstmap (into #{} str1) secondmap (into #{} str2)
        totalLength (+ (count str1) (count str2))]
    (if (= firstmap secondmap)
      true
      (not (> (- totalLength (count (clojure.set/union firstmap secondmap))) 3))
    )))
  


(println (clojure.set/difference (into #{} st1) (into #{} st2)))

(oneAway st1 st2) ; true
(oneAway st1 st3) ; true
(oneAway st2 st3) ; false
(oneAway st4 st5) ; false
