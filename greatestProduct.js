var ramda = require('ramda');

function greatestProductOfPairs(array) {
  count = 0;// demo of memoization, aka DRY javascript interpreter.
  //var mult = ramda.memoize(function (x,y) {
    //count++;
    //return x * y;
  //});

  var mult = function ( x,y ) {
    count++;
    return x * y;
  }

  var result = -Infinity;
  for ( var i = 0 ; i < array.length ; i++ ) {
    for ( var j = i ; j < array.length ; j++ ) {
      if( mult(array[i], array[j]) > result && i !== j ) {
        result = mult(array[i], array[j]);
      }
    }
  }
  console.log("Multiply is run: ", count, " times"); // side effect.
  return result;
} // impure function, side effects to console.
  //removeing that side effect makes it pure.

console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200
