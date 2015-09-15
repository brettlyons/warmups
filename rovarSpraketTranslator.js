function rovarSpraket(string) {
  const VOWEL = new RegExp(/[aeiou ]+/i); // First usage of const in JS ever!
  return string.split('').map(function(element) {
    if (VOWEL.test(element)) {return element;}
    return element + 'o' + element;
  }).join("");
}
console.log(rovarSpraket('this is fun'));
console.log(rovarSpraket('ThIs iS fuN'));

/*
// ternary version
function rovarSpraket(string) {
  const VOWEL = new RegExp(/[aeiou ]+/i); // First usage of const in JS ever!
  return string.split('').map(function(element) {
    return (VOWEL.test(element))
      ? element
      : element + 'o' + element;
  }).join("");
}
*/

//absurd linecount optimization version
//function rovarSpraket(string) {
//return string.split('').map(function(element) {
    //return (new RegExp(/[aeiou ]+/i).test(element)) ? element
      //: element + 'o' + element; }).join("");
//}


