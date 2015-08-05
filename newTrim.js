function trim ( inString ) {
  var firstNonSpaceIndex = 0;
  var lastNonSpaceIndex = inString.length - 1;
  for ( letterIndex in inString ) {
    if ( inString[letterIndex] == ' ' ) { continue; }
    firstNonSpaceIndex = letterIndex;
    break;
  }
  for ( var i = lastNonSpaceIndex ; i >= 0; i-- ) {
    if ( inString[i] == ' ' ) { continue; }
    lastNonSpaceIndex = i;
    return inString.substring(firstNonSpaceIndex, lastNonSpaceIndex);
  }
}


var theString = "   My String    Loves Spaces!!     ";
console.log(theString.trim());
// My String    Loves Spaces!
console.log(trim('      Spaaaaaace')+'||||'); // | guard the spaces so they
console.log(trim('Spaaaaaace      ')+'||||'); // are more apparent when logged.
console.log(trim('   Spaaaaaace   ')+'||||');
console.log(trim('      Spaa   ...aaaace     ')+'||||');
