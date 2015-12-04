function fibonacciIndex(index) {
  var prev = 1;
  var curr = 1;
  var temp = 0;
  for(var i = 2; i < index; i++) {
    temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}
console.log(fibonacciIndex(100));
