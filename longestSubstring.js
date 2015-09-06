// the spec is as such:
// given two strings,
// find the longest substring they both share.
//
// so the return for "verbing" and "dingaling" would be "ing"
// the return for "coding" and "odd" would be "od"

// first: detect matching substring
// then : push matching substring into collection variable
// if it is longer than the previous contents of the collection variable.

:let $NVIM_TUI_ENABLE_CURSOR_SHAPE=1



function longestSubString(string1, string2) {
  var output = [];
  var k = 0;
  for(var i = 0 ; i < longest(string1, string2).length; i++) {
    tmpOutput = []
    for(var j = 0 ; j < longest(string1, string2).length; j++) {
      if(string1[i] == string2[j]) {
        console.log("IF ENTERED");
        tmpOutput.push(string1[i]);
      }
    }
  output.push(tmpOutput);
  }
  console.log(output);
  //return output.reduce(function (accum, current) {
    //return longest(accum, current);
  //});

  function longest(str1, str2) {
    return (str1.length > str2.length) ? str1 : str2;
  }
}

console.log(longestSubString("coding", "roading")); // ding
