var include = function(array, target) {
  for (element in array) {
    if ('object' == typeof (array[ element ])) {
      for (sndElement in array[ element ]) {
        if (target[ sndElement ] == array[ element ][ sndElement ] &&
             array[ element ].length == target.length) {
          return true;
        }
      }
    }
    if (array[ element ] === target) { return true; }
  }
  return false;
}

var a = [1,2,3,4,5];
var b = [1, [2, 3]];
var c = [1, {a: 1}];

console.log('true ?>> ' + include(a, 3)); //true
console.log('false ?>> ' + include(a, 7)); //false
console.log('false ?>> ' + include(a, '3')); //false
console.log('false ?>> ' +  include(a, {a: 1})); //false
console.log('true ?>> ' +  include(b, [2, 3])); //true ?
console.log('true ? >> ' + include(c, {a: 1}));
console.log('false ? >> ' + include([1,2,3,[4,5,6]], [4,5]));

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
