function collatzRecursive(n) {
  function go(n, output) {
    if (n === 1) {
      output += n;
      return output;
    }
    output += n + ' -> ';
    return go(n % 2 == 0 ? (n / 2) : (3 * n + 1), output);
  }
  return go(n, '');
}

console.log(collatzRecursive(13), '\n');
console.log(collatzRecursive(252));
