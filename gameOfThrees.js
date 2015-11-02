// game of threes
// if n % 3 == 0, then / by 3
// else n + 1 or n - 1 to make it evenly / by 3
// game ends at 1

function gameOfThrees(n) {
  const DIVISOR = 3;
  
  if (n === 1 || n === -1) {
    console.log(n);
    return n
  }
  if(n % DIVISOR === 0) {
    console.log(n + " 0")
    return gameOfThrees(n / DIVISOR);
  }
  if((n + 1) % DIVISOR == 0) {
    console.log(n + " 1")
    return gameOfThrees((n+1) / DIVISOR);
  }
  console.log(n + " -1")
  return gameOfThrees((n-1) / DIVISOR);
}


// var f = gameOfThrees(100);
var f = gameOfThrees(31337357);

// var f = gameOfThrees(-21);

// while(typeof f == 'function') {
//   f = f();
// }
// TCE unnecessary in this case, but maybe essential w/ larger numbers


