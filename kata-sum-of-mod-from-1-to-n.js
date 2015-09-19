// for i from 1 to n, do i % m and return the sum
// codewars kata
// f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)

// split the input, so one counter goes upwards towards the "next higher" mod zero
// and the other goes downwards, towards the "next lower" mod zero.
// then they can be joined for the total sum of one whole division
// and the one that goes downwards can account for the remainder

function f(n, m) {
  var wholeDivs = Math.floor(n / m);
  var modRotateUpperSplitSum = 0;
  var modRotateLowerSplitSum = 0;
  // var tsArr = [];
  for (var i = (n % m == 0) ? n - 1 : n ; i % m != 0 ; i--) {
    modRotateLowerSplitSum += ((i % m));
  }
  if (n % m != 0) {
    for (var i = (n % m == 0) ? n + 2 : n + 1 ; i % m != 0 ; i++) {
      modRotateUpperSplitSum += ((i % m));
    }
  }
  return (n  * (m - 1) / 2);
  // return ((modRotateLowerSplitSum + modRotateUpperSplitSum) *
  // /*((wholeDivs < 2) ?*/ wholeDivs + /*: wholeDivs - 1) +
  // ((m - n == 0) ? 0 :*/  modRotateLowerSplitSum);
  // // return ((modRotateLowerSplitSum + modRotateUpperSplitSum) * (wholeDivs - 1)) +
  // //   modRotateLowerSplitSum;
}
console.log(f(10, 5), 20); // 20
console.log(f(20, 20), 190); // 190
console.log(f(15, 10), 60);// 60
console.log(f(84939805, 28566164) === 1202653599565235);

// console.log(84939805 / 28566164);
console.log(f(84939805, 28566164));
console.log(1202653599565235);

// function f(n, m) {
//   var wholeDiv = Math.floor(n / m);
//   function sumOfModuloSeries(n, m) {
//     var tmpSum = 0;
//     while (true) {
//       tmpSum += --n % m;
//       if (n % m == 0) {break;}
//     }
//     return tmpSum;
//   }
//   return sumOfModuloSeries(n, m);
// }
// sumOfModuloSeries((n % m), m) +
