
function product(x, y) {
  var output = 0;
  for (var i = y ; i > 0 ; i--) {
    output += x;
  }
  return output;
}

function closedProduct(x) {
  return function innerProduct(y) {
    var output = 0;
    for (var i = x ; i > 0 ; i--) {
      output += y;
    }
    return output;
  }
}

var fjs = require('functional.js');
var sum = fjs.reduce('x, y -> x + y')

function arrayVersion(x, y) {
  var newArray = [];
  function go(newArray, g) {
    if (y == 0) { return sum(newArray); }
    newArray.push(g);
    y--;
    return go(newArray, g);
  }
  return go(newArray, x)
}
console.log(arrayVersion(2, 5), ' array vers, 10?');

console.log(product(10, 5), '50 ?'); // 50
console.log(product(5, 5), '25 ?'); // 25

var multby10 = closedProduct(10);
var multby2 = closedProduct(2);
console.log(multby10(5), ' === 50 ?'); // 50
console.log(multby2(5), '=== 10 ?'); //25

// isPalindrome String -> Boolean

var isPalindrome = function(input) {
  return (input.toUpperCase().split('').reverse().join('') ===
      input.toUpperCase())
}

console.log(isPalindrome('aabbaa'), ' true ?'); //true
console.log(isPalindrome('durp'), ' false?');  //false

var string1 = '0';
var val2 = 0

console.log(string1 == val2, ' true ? '); // true;
console.log(string1 === val2, ' false ?'); //false
// so remember kids, use === because it won't coerce your types for you,
// and makes nesting sites for endangered bird species
