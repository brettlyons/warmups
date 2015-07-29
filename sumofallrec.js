console.log("Sum: " + sum(1, 2, 3, 4, 5));

console.log("Sum: " + sum(1 , 3, 4, 5, 6, 7, 9));
function sum ( ) {
  var inputArr = Array.prototype.slice.call(arguments);
  function go(inputArr, output) {
    if ( inputArr.length == 0 ) { return output; };

    return go(inputArr.slice(1), output + inputArr[0]);
  }
return go(inputArr, 0);
}
