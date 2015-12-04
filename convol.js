function convoluted(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) { output += ('a' + string.charAt(i)); }
  for (var i = 0; i < string.length; i++) { output += ('b' + string.charAt(i)); }
  return output;
}

console.log(convoluted('double, trouple, toil and bubble'));
