var factorial = function( n ) {
  if ( n == 0 || n == 1 ) { return 1; }
  function go( n, accum ) {
    if (n == 1) { return accum; }
  return go( n - 1, accum * n );
  }
return go( n-1, n );
}
var accum = []
var hugeFactorial = factorial ( 100 );
for ( var i = 0; i < 166 ; i++ ) {
  accum.push( hugeFactorial / 10 );
  hugeFactorial = hugeFactorial / 10;
}
console.log(hugeFactorial);
console.log(accum);
//console.log(factorial ( 100 ));
//factorial (171);
//factorial ( 15722 );
//I read a post on stackoverflow about tail-recursion in JS
//and it pretty much left me goin . . "whaaaaaaat?"
//Basically, all of these functions return a function,
//except for the base case.  And that can be used with a
// while loop a la while(typeof functioncall == function) {
// functioncall = functioncall();
// }
//
// It does occur to me that this may be a tad bit . . . absurd?
// at least in that JS doesn't seem like a usecase that would see
// a lot of usage for such an optimization.
