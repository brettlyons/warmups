function reverseString( input ) {
  var output = "";
  for ( var i = input.length - 1 ; i >= 0 ; i-- ) {
      output+= input[i]
  }
  return output;
};
console.log(reverseString('')); // ''
console.log(reverseString('foof')); // 'foof'
console.log(reverseString('stringey')); // 'yegnirts'
