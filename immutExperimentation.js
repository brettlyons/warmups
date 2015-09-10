var Immutable = require('immutable');
var map1 = Immutable.Map({a: 1, b: 2, c: 3});
var map2 = map1.set('b', 50);
console.log(map1.get('b'));
console.log(map2.get('b'));
console.log(map1.get('b'));

console.log (
  Immutable.Range(100, 1)
//  .skip(00)
//  .map(function ( n ) { return  -n; })
//  .filter(function ( n ) {return n % 2 === 0} )
//  .take(2)
  .reduce(function(r, n) {return r * n}, 1)
  );

