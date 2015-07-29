console.log("Sum: " + sum(1, 2, 3, 4, 5));

function sum ( ) {
  var inputArr = arguments;
  function go(inputArr, output) {
    if ( inputArr.length == 0 ) { return output; };

    return go(inputArr.slice(1), output + inputArr[0]);
  }
return go(inputArr, 0);
}
