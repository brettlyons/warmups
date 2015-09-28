function isUniqueChars(string) {
  function go(string, cache) {
    if (cache[string[0]]) { return false; }
    if (string.length == 0) { return true; }
    cache[string[0]] = true;
    return go(string.slice(1), cache);
  }
  return go(string, {});
}

console.log(isUniqueChars('abcdefghijklmnop')); // true
console.log(isUniqueChars('abcampql')); // false
