function integerGen ( n ) {
  function go( x, xs,  n ) {
    if ( x == n ) { return xs; }
    console.log(x + " " + xs + " " + n);
    console.log(typeof xs);
  return go( x+1, xs.push(x), n );
  }
return go( 0 , [], n );
}
console.log(integerGen ( 10 ));
// integerGen ( 257 ) ;

