(ns haskell-array-operations)

(def head first)
(def tail rest)
(def init #(reverse (rest (reverse %)))) ; butlast didn't work here.
(def last_ #(first (reverse %)))
