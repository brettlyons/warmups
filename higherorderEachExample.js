//function each(array, action) {
  //for (var i = 0; i < array.length; i++)
    //action(array[i]);
//}

//action() is of type function.

//var array = [1, 2,3, 5, 'hodor', 'german', 'hotdogstand'];
//each(array, console.log ); // fail in the brower.  Okay in node.

//array.forEach(function ( name ) {
  //console.log(name);
//});

//var total = 0;

var numbers = [2,5,3,4];
//var localMin = Infinity; // effectively 5.17e+307.

//numbers.forEach(function ( number ) {
//(number < localMin ) ? localMin = number : localMin = localMin
//});
//console.log(localMin);

//numbers.forEach(function(num){
//total += num;
//});

//console.log(total)

var numbers = [2,5,3,4];
var myNumbers = numbers.filter(function(elem) {
  return elem % 2 == 0;
});
console.log(myNumbers);
