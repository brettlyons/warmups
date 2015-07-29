console.log("Sum: " + sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sum ( inputArr ) {
  function go( inputArr, output) {
    if ( inputArr.length == 0 ) { return output; };

    return go(inputArr.slice(1), output + inputArr[0]);
  }
return go( inputArr, 0 );
}

function map ( inFunct, inArr ) {
  for ( var i = 0 ; i < inArr.length ; i++ ) {
    return inFunct(inArr[i]);
  }
}

function mult2 ( x ) {
  return x * 2;
}


console.log(map(mult2, [1,2,3]));
