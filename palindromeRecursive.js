function palindrome(string) {
  var sanitizedArray = string.replace(/\W/g, '').toLowerCase().split('');

  function isPalindrome(arrayOfChars) {
    return (arrayOfChars.length <= 1) || (arrayOfChars.pop() === arrayOfChars.shift() && isPalindrome(arrayOfChars));
  }
  return isPalindrome(sanitizedArray);
}

console.log('true ?', palindrome('step on no pets')); // true
console.log('false ?', palindrome('herpderp')); // false
console.log('true ? ', palindrome('a man, a plan, a canal; panama')); // true
