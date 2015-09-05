function palindrome (string) {
  var spaceLessStr = string.replace(/\W/g, "");
  function go(letterArr, letterStack) {
    if (letterArr.length === 0) { return spaceLessStr === letterStack.join(''); }

    letterStack.push(letterArr.pop());
    return go(letterArr, letterStack)
  }

  return go(spaceLessStr.split(''), []);
}

console.log("true ?", palindrome("step on no pets")); // true
console.log("false ?", palindrome("herpderp")); // false
console.log("true ? ", palindrome('a man a plan a canal panama'));
