// calculate dimensions of wrapping paper needed.
// 2x3x4 requires 2*6 + 2*12 + 2*8
//    -- -- --  --- ^ + 6 for slack
//  so total of 58
// input shows up at 2x3x4 per line
// 2 * l * w + 2 * w * h + 2 * h * l

function getSurfaceArea(dimensionsArray) {
  return (dimenionsArray[0] * dimensionsArray[1] * 2)
    + (dimensionsArray[0] * dimensionsArray[2] * 2)
    + (dimensionsArray[1] * dimensionsArray[2] * 2);
}


function getDims(inputLine) {
  return inputLine.split('x');
}

function splitLines(input) {
  return input.split('\n');
}
