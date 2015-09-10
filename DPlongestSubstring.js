function maxSubstring(string1, string2) {
  var output = '';
  var matchMatrix = [];
  for (var i = 0 ; i < string2.length ; i++) {
    matchMatrix.push([]);
    for (var j = 0 ; j < string1.length ; j++) {
      if (string1[ i ] == string2[ j ]) {
        matchMatrix[ i ][ j ] = 1;
      } else {
        matchMatrix[ i ][ j ] = 0;
      }
    }
  }
  return matchMatrix;
}

console.log(maxSubstring('texas', 'example'));
