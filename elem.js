var elem = function( xs, y ){
  function go( xs, y, output) {

//    console.log(xs + " " + y + " " + output + " " + xs[0] + " " + (xs[0] == y));

    if (xs.length == 0 || output == true ) { return output; }
    return go(xs.slice(1), y, (xs[0] == y));
      }
return go( xs, y, false )
}
console.log(elem([1,2,3], 3));
console.log(elem([1,2,3], 2));
console.log(elem([1,2,3], 4));
console.log(elem([1,2,3,4,5,34,62,43,32,5,3,4, 99], 99));




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
