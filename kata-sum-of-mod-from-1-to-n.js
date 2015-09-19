// for i from 1 to n, do i % m and return the sum
// codewars kata
// f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)

console.log(f(10, 5), 'f(10, 5)', '20?'); // 20
console.log(f(20, 20), 'f(20, 20)', '190?'); // 190
console.log(f(15, 10), 'f(15, 10)', '60');// 60
console.log(f(72234289, 89913873)); // ??

function f(n, m) {
  var tmpSum = 0;
  var sndTmpSum = 0;
  var hasHitSecondZero = false;
  var hasHitFirstZero = false;
  var ones = function(x) { return x % 10; };
  while (!hasHitSecondZero) {
    tmpSum += n-- % m;
    if (ones(n) % m == 0) {
      sndTmpSum = tmpSum;
      if (hasHitFirstZero) {
        tmpSum = 0;
        hasHitSecondZero = true;
      }
      hasHitFirstZero = true;
    }
    console.log('Run once', n, ' ones ', ones(n % m));
  }
  return sndTmpSum + tmpSum + (n * (m - 1) / 2);
}
