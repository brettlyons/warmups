function toDecimal ( binaryString ) {
  if ( binaryString === '' ) { return "toDecimal received no input."; }
  var output = 0;
  var newBinaryString = binaryString.split('').reverse().join('');

  for( var i = 0 ; i < newBinaryString.length ; i++ ) {
    output += ( newBinaryString.charCodeAt(i) === 49 ) ?
      Number(Math.pow(2,i)) : 0;

    if ( newBinaryString.charCodeAt(i) !== 49
        && newBinaryString.charCodeAt(i) !== 48 ) {
      console.log(binaryString + " contains characters other than 0 or 1");
      return null;
    }
  }
  return output;
}


console.log("5 ? ", toDecimal("0101")); // 5
console.log("3 ? ", toDecimal("0011")); // 3
console.log(" error . . null ? ", toDecimal("001a")); // contains characters other than 0 or 1 not a binary string

function removeDupes ( string ) {
  return string.replace(/[^\w\s]|(.)(?=\1)/g, "");
} // credit to xanatos on Stack Overflow
function insensitiveRemoveDupes( string ) {
  return string.replace(/[^\w\s]|(.)(?=\1)/gi, "")
} // difference is at /gi

console.log(removeDupes('aaaabbbb'));
console.log(removeDupes('ggbba'));
console.log(removeDupes('abcdefg'));

console.log(insensitiveRemoveDupes('AaAabBbc'));
console.log(insensitiveRemoveDupes( 'gGggg blmkkvsssccd' ));
