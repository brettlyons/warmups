(ns Slope)

(defn slope [v]
	(if (= (- (first v) (first (rest (rest v)))) 0)
    (str "undefined")
    (str (/ (- (first (rest v)) (last v)) (- (first v) (first (rest (rest v))))))))

