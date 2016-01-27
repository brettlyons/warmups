;; from 4clojure.com
;; problem number 156
;; providing default values and a set of keys and turning it into a map.
(ns map-defaults)

fn [defval keycoll]
    (zipmap keycoll (repeat defval)))
