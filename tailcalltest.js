
function sum(n, acc) {
  return n == 0 ? acc : function() { return sum(n - 1, acc + n);  };
}

f = sum(1000000000, 0);
while (typeof f == 'function') {
  f = f();
}
console.log(f);

// console.log(sum(10000)); // <- breaks.
