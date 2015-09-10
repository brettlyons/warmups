var ramda = require('ramda');

function toDecimalFromBase(base, inString) {
  var tmpArray = inString.split('');

  function mult(x,y) {
    return x * y;
  }

  var powerOfSevenSeries = [];
  for (var i = inString.length - 1 ; i >= 0 ; i--) {
    powerOfSevenSeries.push(Math.pow(base, i));
  } // is there a better way to generate this?
  console.log(powerOfSevenSeries);
  return ramda.sum(ramda.zipWith(mult, powerOfSevenSeries, tmpArray));
} // pure function
//even though it mutates a variable local to it's scope?

console.log(toDecimalFromBase(7,'1233215'));
