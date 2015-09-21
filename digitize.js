// digitize takes a number, n, and returns each digit in an array.
// so digitize(10) -> [1,0];
// digitize (3) -> [3];
// digitize(4930028) -> [4,9,3,0,0,2,8];

function digitize(n) {
  var output = [];
  var chars = n.toString().split('');
  for (var i = 0; i < chars.length ; i++) {
    output.push(Number(chars[i]));
  }
  return output;
}

console.log(digitize(2)); // [2]
console.log(digitize(10)); // [1,0]
console.log(digitize(375)); // [3,7,5]
