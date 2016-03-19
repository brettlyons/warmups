function intersection(array1, array2) {
  return array1.filter(function(element) {
    return (array2.indexOf(element) != -1);
  });
}
function someFunction(someArg) {
  return function () { console.log("Hello World"); }
}

module.exports = intersection;
