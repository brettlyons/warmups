// the goal is to rotate the even indices of the string


function rotateEvenIndices(inString) {
  var newString = [];
  var i = 0;
  while ( i < inString.length ) {
    if ( i % 2 == 0 ) {
      newString[i + 2] = inString[i];
    }
    else {
      newString[i] = inString[i];
    }
    i++;
  }
  return newString.join('');
}

var string = 'foobari';
console.log('The f moves accross and then back to the front');
console.log(string);
var rotatedOnce = rotateEvenIndices(string);
console.log(rotatedOnce);

var rotatedTwice = rotateEvenIndices(rotatedOnce);
console.log(rotatedTwice);

var backToOriginal = rotateEvenIndices(rotatedTwice);
console.log(string === backToOriginal); // true
console.log(backToOriginal);
