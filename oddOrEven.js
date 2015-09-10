console.log('for loop vers.')
for (var i = 1 ; i < 11 ; i++) {
  var output = '' + i;
  (i % 2 == 0) ? output += '(even)' : output += '(odd)';
  console.log(output);
}
console.log('while loop vers.')
var i = 1;
while (i < 11) {
  var output = '' + i;
  (i % 2 == 0) ? output += '(even)' : output += '(odd)';
  i++;
  console.log(output);
}
