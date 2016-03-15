// from Cracking the Coding Interview, isUnique is an algo to determine if a
// string has all unique characters in it.

function allUnique(stringOfChars) {
  for(var i = 0; i < stringOfChars.length; i++) {
    for(var j = stringOfChars.length ; j > i; j--) {
      if(stringOfChars[i] == stringOfChars[j]) {
        return false;
      }
    }
  }
  return true;
}

// TESTS
console.log(allUnique("abcdefghijklmno")); // TRUE
console.log(allUnique("abcdefa")); // FALSE
console.log(allUnique("abcdc")); // FALSE
