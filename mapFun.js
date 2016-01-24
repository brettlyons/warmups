// so write three functions, sum, average and count
// then have some test arrays of numbers
// and map over the *functions* for each array


const sum = function (array) {
  return array.reduce(function (x, y) { return x + y; });
};

const count = function (array) {
  return array.length;
};

const avg = function (array) {
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



