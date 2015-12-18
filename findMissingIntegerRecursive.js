const testCase = [1,2,3,4,6];

function recurFindMissing(theArray, total) {
  return (theArray.length == 0) ? (((6*7)/2) - total) : recurFindMissing(theArray.slice(1), (theArray[0] + (total || 0)));
}

console.log(recurFindMissing(testCase));
