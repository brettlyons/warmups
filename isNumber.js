//function that determines if everything in it is a number.

/*
 *function isNumber( input ) {
 *  var canary = true;
 *  for ( var i = input.length - 1 ; i >= 0 ; i--) {
 *   console.log("input[i] " + input[i]);
 *   if ( !( Number(input[i])) || input[i] == "-") {
 *         canary = true
 *   }
 *   else { canary = false };
 *  }
 *  return canary;
 *};
 *
 */
console.log(isNumber(3.41)); //true
console.log(isNumber(4)) ;  //true
console.log(isNumber(333 - 4)); //true
console.log(isNumber('7829x9')); //false
/*
 *
 *function isNumberTwo( input ) {
 *  var canary = true;
 *  for ( var i = input.length - 1 ; i >= 0 ; i--) {
 *   if (  Number(input[i]) || !(input[i] == "-")) { canary = false }
 *  }
 *};
 *
 *console.log( isNumberTwo ( 3.41)); //true
 *console.log( isNumberTwo ( 4 )) ;  //true
 *console.log ( isNumberTwo (333-4)); //true
 *console.log ( isNumberTwo ("7829x")); //false
 *
 */

function isNumber(str) {
  noDash = str.replace(/-/g, '');
  return (Number(noDash) > -1)
}
