(:ns fibonacci)

;; (defn fibonacci [n & collection]
;;   (let [collection (or collection ())]
;;     (if (= (count collection) n)
;;       collection
;;       (recur (- n 1) (cons collection (+ (last collection) n))))))
;; (println (fibonacci 10))

(def m-fib
  (memoize (fn [n]
             (condp = n
               0 1
               1 1
               (+ (m-fib (dec n)) (m-fib (- n 2)))))))

(dotimes [n 5]
  (println (m-fib n)))

;; (defn fiblist [n]
;;   (reduce #(conj % (+ %2 (last %))) [1 1]))

;; (println (fiblist 2))
