function power(base, exponent) {
  return ( exponent == 1 ) ? base : (base * power(base, exponent-1));
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
  if(exponent < 0) {
    base = 1/base
    exponent = Math.abs(exponent);
  }
  if (exponent == 1 )  { return base; }
  return base * powerSturdy(base, exponent-1);
}

function powerRationalStyle(base, exponent) {  // only useful to humans,
  // or a mathy tokenizer
  return (exponent < 0) ? rationalWrap(power(base, Math.abs(exponent)))
  : base * power(base, exponent-1);

  function rationalWrap (result) {
    return "1/"+result;  // *KLAXONS* **HACK ALERT** **HACK ALERT**
  }
}

console.log(powerRationalStyle(2, -1));
console.log(powerRationalStyle(2, -2));
console.log(powerRationalStyle(2, -10));
console.log(powerRationalStyle(2, 10));
console.log(powerRationalStyle(100, -154));
