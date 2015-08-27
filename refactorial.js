function factorial( n, accum ) {
  return ( n == 0 || n == 1 ) ? accum : function() { return factorial(n-1, accum * n) };
}
var accum = []
var hugeFactorial = factorial (100, 0);
//for ( var i = 0; i < 166 ; i++ ) {
  //accum.push( hugeFactorial / 10 );
  //hugeFactorial = hugeFactorial / 10;
//}

//console.log(hugeFactorial);
//console.log(accum);
var fac = factorial( 170, 1 );
while(typeof fac == 'function') {
  fac = fac();
}
console.log(fac);
//console.log(factorial ( 100 ));
//factorial (171);
//factorial ( 15722 );
