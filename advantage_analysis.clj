(ns advantage_analysis)


(defn rolld20 []
  (+ 1 (rand-int 20)))

(defn adv-rolld20 []
  (max (rolld20) (rolld20)))

(defn generate-thousand-rolls [rollfn]
  (take 1000 (repeatedly rollfn)))

(defn mean [coll]
  (let [sum (apply + coll)
        count (count coll)]
    (if (pos? count)
      (/ sum count)
      0)))

(defn median [coll]
  (let [sorted (sort coll)
        cnt (count sorted)
        halfway (quot cnt 2)]
    (if (odd? cnt)
      (nth sorted halfway) ; (1)
      (let [bottom (dec halfway)
            bottom-val (nth sorted bottom)
            top-val (nth sorted halfway)]
        (mean [bottom-val top-val])))))

(defn standard-deviation [coll]
  (let [avg (mean coll)
        squares (for [x coll]
                  (let [x-avg (- x avg)]
                    (* x-avg x-avg)))
        total (count coll)]
    (-> (/ (apply + squares)
           (- total 1))
        (Math/sqrt))))

(defn print-rolls [rollset]
  (println (:roll-label rollset))
  (println "\n\t Mean: " (:mean rollset)
           "\n\t Median: " (:median rollset)
           "\n\t Standard deviation: " (:std-dev rollset)))

(defn generate-data []
  (let [std-rolls (generate-thousand-rolls rolld20) adv-rolls (generate-thousand-rolls adv-rolld20)]
    (print-rolls {:roll-label "Standard Rolls: "
                  :mean (+ 0.0 (mean std-rolls))
                  :median (median std-rolls)
                  :std-dev (standard-deviation std-rolls)})
    (print-rolls {:roll-label "Advantaged Rolls: "
                  :mean (+ 0.0 (mean adv-rolls))
                  :median (median adv-rolls)
                  :std-dev (standard-deviation adv-rolls))))
