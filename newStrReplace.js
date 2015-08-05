// replace ( string, substr, replaceStr )

function replace ( str, substr, replacestr ) {
  var output = "";
  var substrPos= -1;
  replacestr = replacestr || '';
  for ( var i = 0 ; i < str.length ; i++ ) {
    if ( substr[0] == str[i] ) {
      substrPos = i;
      for ( var j = 0 ; j < substr.length ; j++ ) {
        if ( substr[j] != str[i+j] ) {
          substrPos = -1;
          break;
        }
      }
    }
  } // and now for the tricky bit...
  var unforIndex = 0;
  for ( var i = 0 ; i < str.length ; i++ ) {
    if ( substrPos <= i && replacestr.length > unforIndex ) {
      output += replacestr[unforIndex];
      unforIndex++;
    } else { output += str[i]; }
  }
  return output;
}
console.log(replace('I like cats', 'c', 'b'));
console.log(replace('I like cats', 'cat', 'dog'));
console.log(replace('I like cats', 'cat', 'rattlesnakes'));// breaks
console.log(replace('I like cats and cats', 'cat', 'rat'));
