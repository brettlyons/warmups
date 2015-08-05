function toLowerCase( inString ) {
  var output = "";
  var arrOfCharCodes = [];
  for ( var i = 0 ; i < inString.length ; i++ ) {
    arrOfCharCodes.push(inString.charCodeAt(i));
  }
  for ( arrayIndex in arrOfCharCodes ) {
    //console.log("DEBUG ***" + arrOfCharCodes[arrayIndex])
        output += ( arrOfCharCodes[arrayIndex] < 91 &&
            arrOfCharCodes[arrayIndex] > 64 ) ?
    String.fromCharCode(arrOfCharCodes[arrayIndex] + 32) :
    String.fromCharCode(arrOfCharCodes[arrayIndex]);
  }

  return output;
}

function toUpperCase( inString ) {
  var output = "";
  var arrOfCharCodes = [];
  for ( var i = 0 ; i < inString.length ; i++ ) {
    arrOfCharCodes.push(inString.charCodeAt(i));
  }
  for ( arrayIndex in arrOfCharCodes ) {
    //console.log("DEBUG ***" + arrOfCharCodes[arrayIndex])
        output += ( arrOfCharCodes[arrayIndex] < 123 &&
            arrOfCharCodes[arrayIndex] > 96 ) ?
    String.fromCharCode(arrOfCharCodes[arrayIndex] - 32) :
    String.fromCharCode(arrOfCharCodes[arrayIndex]);
  }

  return output;
}
console.log(toUpperCase("lower"));
console.log(toUpperCase("abcdefghijklmnopqrstuvwxyz"));
console.log(toUpperCase("Lower with SCHPACES."));
console.log(toLowerCase("ABC DEFG HIJKL MNOPQ RSTUVWXYZ"));

var lower = 'lower';
var upper = 'UPPER';

console.log(lower.toLowerCase());
//lower
console.log(lower.toUpperCase());
// LOWER

console.log(upper.toLowerCase());
// upper
console.log(upper.toUpperCase());
// UPPER


