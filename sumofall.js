console.log('Sum: ' + sum(1, 2, 3, 4, 5));

function sum() {
  var inputArr = arguments;
  output = 0;
  for (var i = 0 ; i < inputArr.length ; i++) {
    output += inputArr[i];
  }
  return output;
}
