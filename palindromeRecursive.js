//function palindrome (string) {
  //var spaceLessStr = string.replace(/\W/g, "");
  //function reverse(letterArr, letterStack) {
    //if (letterArr.length === 0) { return spaceLessStr === letterStack.join(''); }

    //letterStack.push(letterArr.pop());
    //return reverse(letterArr, letterStack)
  //}

  //return reverse(spaceLessStr.split(''), []);
//}

console.log("true ?", palindrome("step on no pets")); // true
console.log("false ?", palindrome("herpderp")); // false
console.log("true ? ", palindrome('a man, a plan, a canal; panama')); // true


function palindrome(string) { // also handles 'odd' palindromes
  var sanitizedArray = string.replace(/\W/g, "").split('');

  function isPalindrome(arrayOfChrs) {
    if(arrayOfChrs.length <= 1) { return true; }
    if(arrayOfChrs.pop() != arrayOfChrs.shift()) { return false; }

    return isPalindrome(arrayOfChrs);
  }

  return isPalindrome(sanitizedArray);
}
