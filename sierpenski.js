function sierpinski(n) {
  function getLinePiece(lineNum) {
    if (lineNum % 4 == 0) { return 'L';}
    if (lineNum % 4 == 1) { return 'L L';}
    if (lineNum % 4 == 2) { return 'L   L';}
    if (lineNum % 4 == 3) { return 'L L L L';}
  }
  var counter = 0;
  var output = '';
  while (counter <= n) {
    output += getLinePiece(counter) + '\n';
  }
  return output;
}
