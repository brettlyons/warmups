var fjs = require('functional.js');
// takes a string of arithmitic and returns the correct result

function subtractString ( string, operation ) {
  // new versions of this function will take operation as a function
  var arrOfStrings = string.split('-')
    return arrOfStrings.slice(1).reduce ( function ( total, element ) {
      return total -= Number(element);
    }, arrOfStrings[0] );
}

console.log(subtractString('10-20-30'));
