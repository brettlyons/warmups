
function rotateEvenIndices(inString) {
  var stackOfChars = [];
  var output = '';
  for (var i = 0 ; i < inString.length ; i++) {
    if (i % 2 == 0) { stackOfChars.unshift(inString[ i ]); }
  }
  stackOfChars.push(stackOfChars.shift()); // puts 0th element onto the end

  for (var i = 0 ; i < inString.length ; i++) {
    output += (i % 2 == 0) ? stackOfChars.pop() : inString[ i ];
  }
  return output;
}

var string = 'foobar';
console.log('The f moves accross and then back to the front');
console.log(string);
var rotatedOnce = rotateEvenIndices(string);
console.log(rotatedOnce);

var rotatedTwice = rotateEvenIndices(rotatedOnce);
console.log(rotatedTwice);

var backToOriginal = rotateEvenIndices(rotatedTwice);
console.log(string === backToOriginal); // true
console.log(backToOriginal);
