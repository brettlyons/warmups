function countAsterix(inputString) {
  return inputString.split('').reduce(function (count, currentChar) {
    return (currentChar == '*') ? ++count : count;
  }, 0);
}

function findBiggestCount(inputString) {
  return inputString.split(' ').map(countAsterix).sort(largestSort)[0];
}
function largestSort(a,b) {
  return b - a;
}

console.log("3 ? ", findBiggestCount("*** *** **"));
console.log("4 ? ", findBiggestCount("*** *** **** *"));
console.log("2 ? ", findBiggestCount("* **"));
