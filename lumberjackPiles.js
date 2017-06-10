// store log piles in an array of arrays.
// so [[1 1 1],
//     [2 1 3],
//     [1 4 1]]
//
// is a 3x3 set of piles, and
// and would result in . . .
// [[3 2 2],
//  [2 2 3],
//  [2 4 2]]


// function placeLogs(pilesArrays, remainingLogs) {
//   var sndToLowest = 2;// magic number.
//   for(var i = 0 ; i < pilesArrays.length ; i++ ) {
//     for(var j = 0 ; j < pilesArrays[i].length ; j++ ) {
//       if(pilesArrays[i][j] < sndToLowest) {
//         pilesArrays[i][j] += 1;
//         remainingLogs--;
//       }
//     }
//   }
// }
var firstTestPiles = [[1,1,1],
                      [2,1,3],
                      [1,4,1]]
// doesn't work iirc.
function placeLogs(pilesArrays, remainingLogs, secondToLowest) {
  var i = 0;
  var j = 0;
  while(remainingLogs > 0) {
    if(pilesArrays[i][j] < secondToLowest) {
      pilesArrays[i][j] += 1;
      remainingLogs--;
    }
    if(j == pilesArrays[i].length) {
      i++;
      j = 0;
    }
    if(i == pilesArrays.length - 1 && j == pilesArrays[i].length - 1) {
      secondToLowest++;
      i = 0;
    }
    j++;
  }
}

console.log(firstTestPiles);
placeLogs(firstTestPiles, 7, 2);
console.log(firstTestPiles);

