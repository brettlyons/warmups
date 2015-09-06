//given two strings, write a function, maxSubstring, that returns the longest substring that occurs in both strings.

function maxSubstring(string1, string2) {
  var longestString = (string1.length >= string2.length) ? string1 : string2;
  var shortestString = (string1.length < string2.length) ? string1 : string2;
  var tmpSubstring;
  var outputString = '';

  for(var i = 0 ; i < shortestString.length ; i++) {
    for(var j = 1 ; j < shortestString.length ; j++ ) {
    tmpSubstring = shortestString.substring(i, j+1);
      if (longestString.indexOf(tmpSubstring) != -1
          && tmpSubstring.length > outputString.length) {

          outputString = tmpSubstring;
      }
    }
  }
  return outputString;
}

console.log(maxSubstring("green", "agreed")); // gree
console.log(maxSubstring("odiferous", "ferrous acid")) // rous
console.log(maxSubstring("camp counselor", "crow")) // r
console.log(maxSubstring("javascript", "java")) // java
console.log(maxSubstring("Gerbils", "Mad Max")) // empty string
