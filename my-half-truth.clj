(ns my-half-truth)

(defn my-half-true
  [& args]
  (if (and (some true? args)
           (some false? args))
    true
    false))

(println (my-half-true false true false)) ;; true 
(println (my-half-true true true true)) ;; false
(println (my-half-true true true true false)) ;;true

;; tests
;; (= true (__ false true false))
;; (= false (__ true true true))
;; (= true (__ true true true false))
