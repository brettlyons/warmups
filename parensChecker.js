function parensChecker(string) {
  function go(string, stack) {
    if (string.length == 0) {
      return (stack.length < 1);
    }
    if (string[0] == '(') { stack.push(1); }
    if (string[0] == ')') { stack.pop(1); }

    return go(string.slice(1), stack);
  }
  return go(string, []);
}

console.log(parensChecker('()(((())))')); //=> true
console.log(parensChecker('())))(')); //=> false
console.log(parensChecker(')(')); //=> false
