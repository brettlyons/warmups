var testArray = [1, 3, 17, 4, 5, 2, 8, 9, 10, 12, 11, 6, 19, 7, 13, 18, 16, 15,
                 14, 20];

// console.log(testArray.sort(function(a, b) {
//   return a - b;
// }));

console.log('Before ', testArray);
testArray.sort(function(a, b) {
  return a - b;
});

console.log('After ', testArray);
