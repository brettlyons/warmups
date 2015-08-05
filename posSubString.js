// ( string -> string ) -> number
// returns the index of the first position of a substring
// or -1 if substring does not exist within the other string

function positionOfSubstring( inString, target ) {
  var pos = -1;  //pos short for position
  for ( var i = 0 ; i < inString.length ; i++ ) {
    if ( target[0] == inString[i] )  {
      pos = i;
      var tmpString = "";
      for ( var j = 0 ; j < target.length ; j++) {
        tmpString += inString[i+j];
      }
    if (tmpString == target) { return pos; }
    }
  pos = -1;
  }
return pos;
}


console.log(positionOfSubstring( 'This string', 'is'));
console.log(positionOfSubstring( 'this string', 'isn\'t'));
