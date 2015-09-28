function isUniqueChars(string) {
  function go(string, cache) {
    // O(1) lookup regardless of how big the cache {} gets
    // this solution is inspired by memoization of recursive calls
    if (cache[string[0]]) { return false; }
    if (string.length == 0) { return true; }
    cache[string[0]] = true;
    return go(string.slice(1), cache);
  }
  return go(string, {});
}

console.log(isUniqueChars('abcdefghijklmnop')); // true
console.log(isUniqueChars('abcampql')); // false
