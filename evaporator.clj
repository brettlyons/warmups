(ns evaporator.core)

(defn evaporator [content evap_per_day threshold]
  (- (content (* content evap_per_day)) threshold)
  (if (> threshold evap_per_day)
  	(content)
    (recur [(- (content (* content evap_per_day))) evap_per_day threshold])
  )
)

(evaporator 10 10 10)
