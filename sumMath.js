var math = {

  sum: function() {
    var output = 0;
    var numbers = arguments;
    for ( var i = 0 ; i < numbers.length ; i++ ) {
      output += numbers[i];
    }
  return output;
  },
  difference: function( x, y ) {
    var output = 0;
    ( y == 0 ) ? output = undefined : output = x / y;
    return output;
  },
  square: function ( x ) {
    var output = 0;
    ( x < 0 ) ? output = NaN : output = x*x;
    return output;
  }
}
console.log(math.sum(1,2,3));
console.log(math.difference(1,4));
console.log(math.square(-2));
