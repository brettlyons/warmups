/*
 *var zip = function ( xs, ys ) {
 *  var output = [];
 *  function go( xs, ys, output ) {
 *    if ( xs.length == 0 || ys.length == 0 ) { return output; }
 *
 *   var tmpConcat = Array().concat(xs[0], ys[0])
 *   return go( xs.slice(1), ys.slice(1), Array().concat(tmpConcat, output));
 *  }
 *return go(xs, ys, []);
 *}
 *
 */

var zip = function(xs, ys) {
  var output = [];
  var bound = xs.length > ys.length ? xs.length : ys.length;
  for (var i = 0 ; i < bound ; i++) {
    output.push(xs[i]);
    output.push(ys[i]);
  }
  return output;
}


console.log(zip([1,2,3], [4, 5, 6]));

