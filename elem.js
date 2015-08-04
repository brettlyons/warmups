var include = function ( array, target ) {
  for ( idx in array ) {
    if ( array[idx] === target ) { return true; }
  }
return false;
}

var a = [1,2,3,4,5];
console.log( include( a, 3 )); //true
console.log( include( a, 7 )); //false
console.log( include( a, "3")); //false
console.log( include( a, {a: 1})); //false




/*
 *var elem = function( xs, y ){
 *  function go( xs, y, output) {
 *
 *    console.log(xs + "\ninputArray, xs ^" + y + "\ntarget, y ^ " + output + "\noutput ^ " + xs[0] + "\n0th element of xs ^" + (xs[0] == y));
 *
 *    if (xs.length == 0 || output == true ) { return output; }
 *  return go(xs.slice(1), y, (xs[0] == y));
 *  }
 *return go( xs, y, false )
 *}
 */
//console.log(elem([1,2,3], 3));
//console.log("^ true ^ ");
//console.log(elem([1,2,3], 2));
//console.log("^ true ^ ");
//console.log(elem([1,2,3], 4));
//console.log("^ false ^ ");
//console.log(elem([1,2,3,4,5,34,62,43,32,5,3,4, 99], 99));
//console.log("^ true ^ ");



/*
 *
 *var elemMoreThan = function( xs, y ){
 *  function go( xs, y, output) {
 *
 *    console.log(xs + " " + y + " " + output + " " + xs[0] + " " + (xs[0] == y));
 *
 *    if (xs.length == 0 || output.length == 0 ) { return output; }
 *    return go(xs.slice(1), y, (xs[0] == y));
 *      }
 *return go( xs, y, 0 )
 *}
 */
