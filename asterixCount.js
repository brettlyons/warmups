// this is a "I didn't want to re-write findBiggestCount to accomodate abstraction of selectThingToCount" function.
function countAsterix(input) {
  return selectThingToCount('*')(input);
}


function findBiggestCount(inputString, sortFn, splitChar) {
  if(!splitChar) {
    splitChar = ' ';
  }
  return inputString.split(splitChar).map(countAsterix).sort(sortFn)[0];
}

function largestSort(a,b) {
  return b - a;
} // So you can also sort by smallest

function smallestSort(a, b) {
  return a - b;
}

function selectThingToCount(charToCount) {
  return function (input) {
    return input.split('').reduce(function (count, currentChar) {
      return (currentChar == charToCount) ? ++count : count;
    }, 0);
  }
}

console.log("TEST: 3 ? ", findBiggestCount("*** *** **", largestSort));
console.log("TEST: 4 ? ", findBiggestCount("*** *** **** *", largestSort));
console.log("TEST: 2 ? ", findBiggestCount("* **", largestSort));
