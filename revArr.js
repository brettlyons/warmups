function reverseArray(input) {
  var output = [];
  for (var i = input.length - 1 ; i >= 0 ; i--) {
    output.push(input[i]);
  }
  return output;
};
console.log(reverseArray([]));// []
console.log(reverseArray([1,2,3,4])); // [4,3,2,1]
console.log(reverseArray([{obj1: true}, {obj2: false}])); // [{obj2: false}, {obj1: true}]
