var original = ['a','b','c'];
var new1 = 'd';
//console.log(original.concat(new1));
['a','b','c','d']

//console.log(original); // unmodified

var new2 = ['e'];
//console.log(original.concat(new2));
// ['a','b','c','e']

var new3 = [['f'], 'g'];
//console.log(original.concat(new3));
// ['a','b','c',['f'],'g']
//

function concat(array1, array2) {
  (array1.length == undefined) ? array1 = Array(array1) : array1 = array1;
  (array2.length == undefined) ? array2 = Array(array2) : array2 = array2;
  // fair attribution, I overheard Lisa's solution. All her idea ^
  var output = [];
  for (var i = 0 ; i < array1.length ; i++) {
    output.push(array1[i]);
  }
  for (var j = 0 ; j < array2.length ; j++) {
    output.push(array2[j]);
  }
  return output;
}

console.log(concat(original, new1));
// ['a', 'b', 'c', 'd']
console.log(concat(new2, new3));
// ['e', ['f'], 'g']
var new4 = {thing: 'awesome'}
console.log(concat(original, new4));
// [ 'a', 'b', 'c', { thing: 'awesome' } ]

