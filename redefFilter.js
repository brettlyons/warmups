var myFilter = function(inputArray, inputFunction) {
  var output = [];
  for (var i = 0 ; i < inputArray.length ; i++) {
    if (inputFunction(inputArray[ i ])) { output.push(inputArray[ i ]) }
  }
  return output;
}
