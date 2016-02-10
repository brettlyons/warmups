function makeIncFn (additionFn) {
  return additionFn(1);
}

function add (number) {
  return function (sndNumber) { return number + sndNumber; };
}

var increment = makeIncFn(add);

console.log(increment(3)); // should return 4
