console.log("Sum: " + sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sum ( inputArr ) {
  function go( inputArr, output) {
    if ( inputArr.length == 0 ) { return output; }

    return go(inputArr.slice(1), output + inputArr[0]);
  }
return go( inputArr, 0 );
}

function range( start, end ) {
  function go( start, end, xs ) {
  if ( end == xs[xs.length-1] ) { return xs; }
  xs.push(start++);
  return go(start, end, xs);
  }
return go(start, end, [] );
}
console.log(range(-21,10));

//console.log(sum(range(1,10)));

//function map ( inFunct, inArr ) {
  //for ( var i = 0 ; i < inArr.length ; i++ ) {
    //return inFunct(inArr[i]);
  //}
//}

//function mult2 ( x ) {
  //return x * 2;
//}


//console.log(map(mult2, [1,2,3]));
