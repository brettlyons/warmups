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
function integerGen ( start, end ) {
  if ( start == end ) { return xs }
  else { xs.push(start + 1);
//  console.log(start);
  }

return integerGen(start + 1, end);
}
console.log(integerGen (-10, 10));
//integerGen (0, 16000);

