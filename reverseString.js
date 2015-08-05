//function reverseString( inString ) {
  //var output = "";
  //for ( var i = inString.length - 1 ; i >= 0 ; i-- ) {
      //output+= inString[i];
  //}
  //return output;
//};
//console.log(reverseString('')); // ''
//console.log(reverseString('foof')); // 'foof'
//console.log(reverseString('stringey')); // 'yegnirts'

// this is not working currently -- it does not mutate the inString.
function reverseInPlace ( inString ) {
  var tmpString = "";
  for ( var i = inString.length ; i >= 0 ; i-- ) {
    tmpString += inString[i];
  }
  for ( var i = tmpString.length, j = 0 ; i >= 0 ; i--, j++ ) {
    inString[i] = tmpString[j];
    console.log(inString);
  }
}
var myString1 = "Yellow Door";
var myString2 = "green forest";
reverseInPlace (myString1);
reverseInPlace (myString2);
console.log(myString1);
console.log(myString2);
