const VOWEL_EXP = new RegExp(/[aeiou ]+/i); // First usage of const in JS ever!
const VOWEL_OBJ = { a: true, A: true, e: true, E: true, i: true, I: true,
                o: true, O: true, u: true, U: true, ' ': true };

function withRegexp(string) {
  return string.split('').map(function(element) {
    if(VOWEL_EXP.test(element)) {
      return element;
    }
    return element + 'o' + element;
  }).join("");
}

function withObject(string) {
  return string.split('').map(function(element) {
    if (VOWEL_OBJ[element]) {
      return element;
    }
    return element + 'o' + element;
  }).join("");
}

var testString = "Bacon ipsum dolor amet ham hock pork chop kielbasa, nisi chuck et veniam dolore beef ribs minim prosciutto culpa. Turkey picanha spare ribs et short loin voluptate consequat pork belly lorem. Pork dolore sunt tempor doner ut chuck consectetur fatback consequat meatloaf tongue tri-tip elit. Fugiat in esse hamburger andouille qui drumstick pork loin reprehenderit salami capicola sint. Ut cupim eiusmod, adipisicing duis shank nisi ullamco culpa kielbasa salami landjaeger tongue. Voluptate picanha do commodo nulla quis, shankle tail flank fugiat salami pancetta pork chop swine."
var max = 10000
var runObject = "Object run";
console.time(runObject);
for (var i = max; i > 0 ; i--) {
  withObject(testString);
}
console.timeEnd(runObject);

var runRegexp = "Regexp run";
console.time(runRegexp);
for (var i = max; i > 0 ; i--) {
  withRegexp(testString);
}
console.timeEnd(runRegexp);
