console.log("Independant Probability Calculator Hack");
var initialTotalBlocks = 0;
var secondTotalAttempts = 0;
var secondTotalBlocks = 0;
var totalAttempts = 1000;
function doubleBlock(blockChance) {
  for (var i = 0 ; i <= totalAttempts; i++) {
    if(Math.random() < blockChance) { // for 3x shield training + blockMastery 2 (+ 10%)
      initialTotalBlocks += 1;
    }
    else {
      if(Math.random() < blockChance) {
        secondTotalBlocks += 1;
      }
    }
  }
  return initialTotalBlocks + secondTotalBlocks;
}
var totalBlocks = doubleBlock(0.30); // takes single block chance as a ratio, so 0.15 = 15%, etc.
console.log("Out of " + totalAttempts + " Attempted Swings");
console.log("Initial Blocks " + initialTotalBlocks + " / " + totalAttempts);
console.log("Second Blocks " + secondTotalBlocks + " / " + totalAttempts);
console.log("Total Blocks out of " + totalAttempts + " swings: " + totalBlocks);
