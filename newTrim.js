/*
 *function trim ( inString ) {
 *  var firstNonSpaceIndex = 0;
 *  var lastNonSpaceIndex = inString.length - 1;
 *  for ( letterIndex in inString ) {
 *    if ( inString[letterIndex] == ' ' ) { continue; }
 *    firstNonSpaceIndex = letterIndex;
 *    break;
 *  }
 *  for ( var i = lastNonSpaceIndex ; i >= 0; i-- ) {
 *    if ( inString[i] == ' ' ) { continue; }
 *    lastNonSpaceIndex = i;
 *    return inString.substring(firstNonSpaceIndex, lastNonSpaceIndex);
 *    break;
 *  }
 *  var output = "";
 *  for ( var j = firstNonSpaceIndex ; j < lastNonSpaceIndex ; j++ ) {
 *    output += inString[j];
 *  }
 *  return output;
 *}
 *
 */

function trim ( inString ) {
  var firstNonSpaceIndex = 0;
  var lastNonSpaceIndex = inString.length - 1;
  var output = "";

  while ( inString[firstNonSpaceIndex] == ' ' ||
          inString[lastNonSpaceIndex] == ' ' ) {
    if (inString[firstNonSpaceIndex] == ' ') { firstNonSpaceIndex++; }
    if (inString[lastNonSpaceIndex] == ' ') { lastNonSpaceIndex--; }
  }
  for ( var j = firstNonSpaceIndex ; j < lastNonSpaceIndex ; j++ ) {
    output += inString[j];
  }
  return output;
}




var theString = "   My String    Loves Spaces!!     ";
console.log(theString.trim());
// My String    Loves Spaces!
console.log(trim('      Spaaaaaace')+'||||'); // | guard the spaces so they
console.log(trim('Spaaaaaace      ')+'||||'); // are more apparent when logged.
console.log(trim('   Spaaaaaace   ')+'||||');
console.log(trim('      Spaa   ...aaaace     ')+'||||');
