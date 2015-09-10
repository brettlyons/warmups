// recursion is the invocation of a function from within itself,
// but with slightly different arguments.  This creates a copy of the result
// or of the computation, and this continuation occurs either until space
// on the stack runs out, or until a 'base case' is reached.
// (with the exception that some languages can generate the computation
// without allocating new execution frames on the stack)
//
// It is very simple.
//
// it requires two cases, the repeat-increment or repeat-decrement case,
// and the base case.  The base case returns a non-function, while the repeat
// cases return the same function called with an argument incremented or
// decremented in order to create a series of computations.
//
// Many data structures can be defined recurisvely, which makes understanding
// recursion highly useful.

function power(base, exponent) {
  return (exponent == 0) ? 1 : (base * power(base, exponent - 1));
}

console.log(power(2, 3));
//=> 8
console.log(power(4, 2));
//=> 16
console.log(power(100, 154)); // Holy Mantissa, Watman!

console.log(powerSturdy(2, -1));
console.log(powerSturdy(2, -10));
console.log(powerSturdy(2, -2));

function powerSturdy(base, exponent) {

  if (exponent < 0) {
    base = 1 / base
    exponent = Math.abs(exponent);
  }
  if (exponent == 0) { return 1; }

  return base * powerSturdy(base, exponent - 1);
}

function powerRationalStyle(base, exponent) {  // only useful to humans,
  // or a mathy tokenizer
  return (exponent < 0) ? rationalWrap(power(base, Math.abs(exponent)))
  : base * power(base, exponent - 1);

  function rationalWrap(result) {
    return '1/' + result;  // *KLAXONS* **HACK ALERT** **HACK ALERT**
  }
}

console.log(powerRationalStyle(2, -1));
console.log(powerRationalStyle(2, -2));
console.log(powerRationalStyle(2, -10));
console.log(powerRationalStyle(2, 10));
console.log(powerRationalStyle(100, -154));
