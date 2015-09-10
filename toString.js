var toString = function(inputArray) {
  function toString(inputArray, accum) {

    //console.log( "**DEBUG ** Accumualted output:" + accum);
    if (inputArray[ 0 ] == undefined) { return accum.slice(0, accum.length - 1);}
    accum += inputArray[ 0 ] + ',';
    return toString(inputArray.slice(1), accum) ;
  }
  return toString(inputArray, '');
}
console.log(toString(['Hello', 'there!']));
console.log(toString([1,2,3,4,5]));
