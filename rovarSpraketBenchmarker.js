var label = "Object run";
var testString = "Bacon ipsum dolor amet ham hock pork chop kielbasa, nisi chuck et veniam dolore beef ribs minim prosciutto culpa. Turkey picanha spare ribs et short loin voluptate consequat pork belly lorem. Pork dolore sunt tempor doner ut chuck consectetur fatback consequat meatloaf tongue tri-tip elit. Fugiat in esse hamburger andouille qui drumstick pork loin reprehenderit salami capicola sint. Ut cupim eiusmod, adipisicing duis shank nisi ullamco culpa kielbasa salami landjaeger tongue. Voluptate picanha do commodo nulla quis, shankle tail flank fugiat salami pancetta pork chop swine."

// I copy-pasted this ipsum 10 times to increase the benchmark size.

function rovarSpraket(string) {
  var VOWEL = new RegExp(/[aeiou ]+/i); // First usage of const in JS ever!
  //const VOWEL = { a: true, A: true, e: true, E: true, i: true, I: true,
                  //o: true, O: true, u: true, U: true, ' ': true };
  return string.split('').map(function(element) {
    if(VOWEL.test(element)) {
    //if (VOWEL[element]) {
      return element;
    }
    return element + 'o' + element;
  }).join("");
}

console.time(label);
for (var i = 10000; i > 0 ; i--) {
  console.log(rovarSpraket(testString));
}
console.log("One paragraph, bacon ipsum, " + label);
console.timeEnd(label);


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

//absurd linecount optimization / speed de-optimization version
//function rovarSpraket(string) {
//return string.split('').map(function(element) {
    //return (new RegExp(/[aeiou ]+/i).test(element)) ? element
      //: element + 'o' + element; }).join("");
//}


