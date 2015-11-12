function dubEachMemberOfArray( array ) {
  var output = [];
  for ( var i = 0 ; i < array.length ; i++ ) {
    output += array[i];
    output += array[i];
  }
  return output;
}

console.log(dubRed([1, 2, 3, 4]));
console.log(dubRed([[1,2],[4,5]]));

function dubRed ( array ) {
  return array.reduce(function ( accumulation, current ) {
    accumulation.push(current);
    accumulation.push(current);
    return accumulation;
  }, []);
}


