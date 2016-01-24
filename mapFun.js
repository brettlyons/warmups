// write a function that maps over a series of functions,
// returning the result of each one.

var sum = function (array) {
  return array.reduce(function (x, y) { return x + y; });
};

var count = function (array) {
  return array.length;
};

var avg = function (array) {
  return sum(array) / count(array);
};

var testSequence = [ 1, 15, 47, 96, 284, 392, 12, 34, 53 ];
var testSequence2 = [ 1, 2, 3, 4, 5 ];

var fnSequence = [sum, count, avg];

function stats (arrayOfNumbers) {
  return fnSequence.map(function ( fn ) {
    return (fn(arrayOfNumbers));
  });
}

console.log(stats(testSequence));
console.log(stats(testSequence2), " -- Should Equal: [15, 5, 3] ");



