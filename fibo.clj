(:ns fibonacci)

(defn fibonacci [n & collection]
  (let [collection (or collection ())]
    (if (= (count collection) n)
      collection
      (recur (- n 1) (cons collection (+ (last collection) n))))))

(println (fibonacci 10))

