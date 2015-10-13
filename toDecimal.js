function toDecimal(binaryNumber) {
  return binaryNumber
    .toString()
    .split("") 
    .reduce(function (accumulator, current, index, array) {
      return accumulator + (current * Math.pow(2, (array.length - index - 1)));
    }, 0);
}

console.log(toDecimal(0)); // 0
console.log(toDecimal(1)); // 1
console.log(toDecimal(11)); // 3
console.log(toDecimal(1000)); // 8
console.log(toDecimal(1100)); // 12
