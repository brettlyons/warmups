console.log(arraySum([1,2]));
console.log(arraySum([1,2,3]));
console.log(arraySum([1,2,[1,2]]));


function arraySum(array) {
  function go(array, sum) {
    if (array.length == 0) { return sum;  }
    if (typeof array[0] === 'number') {  sum += array[0];  }
    if (typeof array[0] === 'object') {  return go(array[0], sum);   }

    return go(array.slice(1), sum);

  }
  return go(array, 0);

}
