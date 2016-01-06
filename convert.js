const R = require('ramda');

// purpose, make a chainable, generic "convert"
// aka: The Return Of Dimensional Analysis abstracted.

var convert = R.curry(function (conversionFactor, x) {
  return conversionFactor * x;
});

// synonymous with, but more generic. 
// var convert = function(conversionFactor) {
//   return function (x) { return conversionFactor * x; };
// };

var convertFtToInches = convert(12);
var convertInchesToFt = convert(1/12);

// afaict js lacks the precision to do this correctly 
var gramsCarbonToMol = convert(1/12.33); 

var molarMassOfNa = convert(22.989);
var molarMassOfCl = convert(35.453);


// TESTS:
console.log(convertInchesToFt(13)); // inches -> ft
console.log(convertFtToInches(2)); // ft -> inches
console.log(gramsCarbonToMol(15)); // x is in grams -> mol
console.log(molarMassOfNa(1)); // x is in mol -> grams















