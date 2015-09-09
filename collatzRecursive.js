function collatzRecursive( n ) {
  var output = '';
  function go( n ) {
    if (n === 1) {
      output += " -> " + n;
      return output;
    }
    if (n % 2 === 0 ) {
      output += " -> " + n;
      return go(n / 2);
    }
    if (n % 2 === 1) {
      output += " -> " + n;
      return go(3*n +1);
    }
  }
  return go( n );
}

console.log(collatzRecursive(13));
console.log(collatzRecursive(252));
