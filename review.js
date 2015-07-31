var thisVariable; // <-- Declaration ( reverse stabby! )
thisVariable = 0; // <-- assignment of thisVariable.

thisVariable = 7; // <-- reassignment of thisVariable

function dostThouEvenHoist(quant) {
  function verilyHoisteth () {
    howMuchHoisteth = quant + " lines hoisted yonder morning"
    return howMuchHoisteth;
  }
  function dostNotHoist() {
    howMuchHoisteth = "Hoisting troublest me not!";
  return howMuchHoisteth;
  }

  var howMuchHoisteth;
  quant == 0 ? funcHoisteth = dostNotHoist : funcHoisteth = verilyHoisteth;

  var funcHoisteth;
return funcHoisteth;
};

var hoisted = dostThouEvenHoist(0);
var hoisted2 = dostThouEvenHoist("10");

console.log(hoisted());
console.log(hoisted2());


var myObjectDemo = {
  definition: "The definition is"; // state
  getDef: function ( defName ) { //behavior
    console.log( defName );
    return this.definition;

    defString: "A string is a reference datatype composed of characters sequentially ordered via 0 based index in a sequential structure, in JS, it is also an object.";

    defNumber:"A number is a primitive datatype that may (or may not) contain a mantissa, bitwidth of 64 in JS.";

  defArray:  "An array is a sequentially indexed , ordered (and in some languages, sequentailly stored), set of values.  In some languages, type invariance is required, not so in JS.";

  defObject = "An javascript object is a collection of property/value pairs."
  }
};

// what is function/method ?
// methods are properties of objects whose value is a function.
// functions are sets of instructions defined seperately from invocation/execution.
//


