//function range ( n ) {
//  function go( x, xs,  n ) {
 //   if ( x == n ) { return xs; }
//    console.log(x + " " + xs + " " + n);
//    console.log(typeof xs);
//  return go( x+1, xs.push(x), n );
//  }
//return go( 0 , [], n );
//}
// range ( 257 ) ;

var xs = new Array();
function range(start, end) {
  if (start == end) { return xs }
  xs.push(start + 1);

  //  console.log(start);
  return range(start + 1, end);
}

console.log(range(5, 15));
console.log(range(-10, 10));

//console.log(range (0, 15700));

