function allCharsUnique(string) {
  function go(string, cache) {
    // O(1) lookup regardless of how big the cache {} gets
    // this solution is inspired by memoization of recursive calls
    if (cache[string[0]]) { return false; } // halt execution if duplicate char exists
    if (string.length == 0) { return true; }
    cache[string[0]] = true; // accumulate into the cache on each iteration
    return go(string.slice(1), cache); // for the pattern below to work, this
    // return <recursive call> may need to be refactored to an anon. function
    // example: return function () { return go(string.slice(1), cache); }
  }
  return go(string, {});
  // var f = go(string, {});
  // while (typeof f == 'function') {
  //   f = f();
  // }
  // return f;
}

function allCharsUniqueIter(string) {
  var cache = {};
  for (var i = 0 ; i < string.length ; i++) {
    if (cache[string[i]]) { return false ;}
    cache[string[i]] = true;
  }
  return true;
}

function allCharsUniqueRed(string) {
  //slightly slower, guranteed to check very character in the array
  var arr = string.split('');
  var output = arr.reduce(function(collection, element) {
    if (collection[element]) { return false; }
    if (!collection[element]) { collection[element] = true; }
    return collection;
  }, {});
  return (typeof output != 'boolean');
}

console.log(allCharsUnique('abcdefghijklmnop')); // true
console.log(allCharsUnique('abcampql')); // false

/* this pattern can be used to replace line 12 above. *\
  var f = go(string, {});
  while (typeof f == 'function') {
    f = f();
  }
  return f;
  // // this pattern effectively renders any argument about speed or stack size
  // // moot when reasoning about recursion in javascript.
  // // since the most likely (english ascii) search space is only 127 characters
  // // or so, it seems unnecessary in this case.
  // // I leave it here so you can learn the pattern, so if
  // // the recursive solution is simpler in a different problem, you can use it.
*/
