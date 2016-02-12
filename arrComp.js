var array1 = [ "cat", "dog", "fish" ];
var array2 = [ "lion", "pointer", "trout" ];
var array3 = [ "earth", "jupiter", "mars" ];
var array4 = [ "earth", "jupiter", "mars" ];

var eq = function (thing1, thing2) {
  return thing1 === thing2;
};

function configureCompareArrays(comparisonFn) {
  return function (inputArr1, inputArr2) {
    for(var i = 0; i < inputArr1.length; i++) {
      if(!comparisonFn(inputArr1[i], inputArr2[i])) {
        return false;
      }
    }
    return true;
  };
}

var compareArraysForEquality = configureCompareArrays(eq);

console.log("false? => ", compareArraysForEquality(array1, array2));
console.log("true? => ", compareArraysForEquality(array3, array4));
