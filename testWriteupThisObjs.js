var theExampleForPart2 = {
  thisPropertyName: 'might result in confusion if the reader skims it and doesn\'t read it carefully',
  myMethod: function(prop) {
    this.thisPropertyName = 'myMethod was run';  // <-- USAGE OF this FOR #2
  },
};
console.log(theExampleForPart2.thisPropertyName);
theExampleForPart2.myMethod();
console.log(theExampleForPart2.thisPropertyName);

function MyConstructorExamp(theProperty) {
  this.theprop = theProperty;  // <-- USAGE OF this FOR #3
};

var shakes = new MyConstructorExamp('We know what we are, but know not what we may be.');
//console.log(shakes);
console.log(shakes.theprop);
