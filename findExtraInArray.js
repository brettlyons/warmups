//function findExtra(array) {
  //if (array === []) { return array; }
  //array.sort(function(a,b){
    //return a-b;
  //});
  //var tmpSum = array.reduce(function(accumulator, currentVal){
    //return accumulator + currentVal;
  //},0); // returns the actual sum of the string
  //var tmpN = array.length - 1 // tmpN is the highest value in the string
  //var tmpSum2 = (tmpN * (tmpN + 1))/2 // calculates the sum of [1..n]

  //return (tmpSum - tmpSum2);
//}

//console.log("2 ?",  findExtra([1,2,3,4,2])); // 2
//console.log("4 ?", findExtra([1,2,3,4,5,6,7,8,9,4]));// 4
//console.log(" [] ? NaN ?", findExtra([])); // NaN -- Srsly?

function detectSingulars(array) {
  if (array === []) { return array; }
  function isMatch(x1, x2) {
    return x1 === x2;
  }
  array.sort(function(a, b) {
    return a - b;
  }); // critical!

  for (var i = 0 ; i < array.length ; i += 2) {
    if (!isMatch(array[i], array[i + 1])) {return array[i];}
  }
  return 'no singulars found';
}

console.log('Singular is: 1 ?: ', detectSingulars([1,2,3,3,2]));
console.log('Singular is: 4 ?: ', detectSingulars([1,2,3,4,2,3,1]));

console.log('No singulars: ', detectSingulars([1,2,3,1,2,3]));
//testForAsWhile();

//function testForAsWhile() {
  //for ( ;; ){
    //console.log('For pun while entered and run . .');
    //break;
  //}
//}

