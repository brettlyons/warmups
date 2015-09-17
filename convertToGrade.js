//given an array of test scores [ 68, 74, 99, 45, 83, 95 ] and the scale: F
//is less than 60, D is 60 to 69, C is 70 to 79, B is 80 to 89, A is 90 to 100.

//Write a function that returns an array:

var arr = [68, 74, 99, 45, 83, 95];

// function convertToGrade(array) {
//   return array.map(function(element) {
//     if (element < 60) { return 'F';}
//     if (element < 70) { return 'D';}
//     if (element < 80) { return 'C';}
//     if (element < 90) { return 'B';}
//     if (element < 101) { return 'A';}
//   });
// }

console.log(convertToGrade(arr)); // => [ D, C, A, F, B, A ]

function convertToGrade(array) {
  return array.map(function(element) {
    return (element < 60) ? 'F'
    : (element < 70) ? 'D'
    : (element < 80) ? 'C'
    : (element < 90) ? 'B'
    : (element < 101) ? 'A'
    : 'Invalid input';
  });
}

function convertToGrade(array) {
  function go(array, output) {
    if (array.length == 0) { return output;}
    output.push((array[0] < 60) ? 'F'
    : (array[0] < 70) ? 'D'
    : (array[0] < 80) ? 'C'
    : (array[0] < 90) ? 'B'
    : (array[0] < 101) ? 'A'
    : 'Invalid input');
    return go(array.slice(1), output);
  }
  return go(array, []);
}
