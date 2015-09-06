function palindrome(string) { // also handles 'odd' palindromes
  var sanitizedArray = string.replace(/\W/g, "").split('');

  function isPalindrome(arrayOfChrs) {
    if(arrayOfChrs.length <= 1) { return true; }
    if(arrayOfChrs.pop() != arrayOfChrs.shift()) { return false; }

    return isPalindrome(arrayOfChrs);
  }

  return isPalindrome(sanitizedArray);
}

console.log("true ?", palindrome("step on no pets")); // true
console.log("false ?", palindrome("herpderp")); // false
console.log("true ? ", palindrome('a man, a plan, a canal; panama')); // true
