function convoluted( string ) {
  var output = '';
  function repeatChrAndIndex ( inStr ) {
    for(var i = 0; i < string.length; i++) {
      output += inStr + string.charAt(i);
    }
  return output;
  }
return repeatChrAndIndex;
}
var thisOldString = convoluted( 'This Old String' );
var withBobVilla = convoluted( 'And Norms New Yankee Workshop' );
console.log(thisOldString('a'));
console.log(withBobVilla('a'));
console.log(thisOldString('b'));
console.log(withBobVilla('b'));

