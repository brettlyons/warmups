//function integerGen ( n ) {
//  function go( x, xs,  n ) {
 //   if ( x == n ) { return xs; }
//    console.log(x + " " + xs + " " + n);
//    console.log(typeof xs);
//  return go( x+1, xs.push(x), n );
//  }
//return go( 0 , [], n );
//}
// integerGen ( 257 ) ;

var xs = new Array();
function integerGen ( x, n ) {
  if ( x == n ) { return xs }
  else { xs.push(x+1); }

return integerGen(x + 1, n);
}
console.log(integerGen (-10, 10));

