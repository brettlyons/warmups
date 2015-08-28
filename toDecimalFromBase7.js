var ramda = require('ramda');
//var imut = require('immutable');

function toDecimalFromBase(base, inString ) {
  var tmpArray = inString.split('');

  //var otherTmpList = imut.List.of(inString.split(''));
  // rambda doesn't work so well with immutable.js

  function mult(x,y) {
    return x * y;
  }
  var powerOfSevenSeries = [];

  for ( var i = inString.length ; i >= 0 ; i-- ) {
    powerOfSevenSeries.push(Math.pow(base, i));
  } // is there a better way to generate this?

  return ramda.sum(ramda.zipWith(mult, powerOfSevenSeries, tmpArray));

}

console.log(toDecimalFromBase(7,'1233215'));
