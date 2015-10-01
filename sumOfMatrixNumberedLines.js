function diagonalSum(arrayOfArrays) {
  function go(arrays, sum, counter) {
    if (arrays.length == 0) { return sum; }
    sum += arrays[0][counter];
    ++counter;
    return go(arrays.slice(1), sum, counter);
  }
  return go(arrayOfArrays, 0, 0);
}
var exampleArray =

                  [[1, 0, 0, 0],

                  [0, 1, 0, 0],

                  [0, 0, 1, 0],

                  [0, 0, 0, 1]];

// console.log(diagonalSum(exampleArray)); // => 4
console.log(redDiagSum(exampleArray)); // -> 4

function redDiagSum(arrayOfArrays) {
  return arrayOfArrays.reduce(function(sum, currentArray, index) {
    return sum + currentArray[index];
  }, 0);
}

var exampleArray2 =

                 [[1, 0, 0, 0, 0],

                  [0, 1, 0, 0, 0],

                  [0, 0, 1, 0, 0],

                  [0, 0, 0, 1, 0],

                  [0, 0, 0, 0, 1]];

console.log(diagonalSum(exampleArray2)); // => 5
console.log(redDiagSum(exampleArray2)); // ~> 5
