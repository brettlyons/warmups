var fjs = require('functional.js');
//takes a string of arithmitic and returns the correct result

//function subtractstring ( string ) {
//  new versions of this function will take operation as a function
//var arrofstrings = string.split('-');
//return arrofstrings.slice(1).reduce( function ( total, element ) {
//return total -= number(element);
//}, arrofstrings[0] );
//}

//function subtractstring( string ) {
//var difference = 0;
//var partition = 0;
//for( var i = 0 ; i < string.length ; i++ ) {
//if ( string[i] == "-") {
//difference -= number(string.substring(partition, i));
//partition = i+1;
//}
//if( i == string.length - 1 ) {
//difference -= number(string.substring(partition, string.length));
//}
//}
//return difference;
//};
//console.log(subtractstring("3-5-7")); //
//console.log(subtractstring("20-7-3")); //
//console.log(subtractstring("235-8472-2")); //
//console.log(subtractstring('10-20-30')); // -40

//function addString ( string ) {
//var sum = 0;
//var partition = 0;
//for( var i = 0 ; i < string.length ; i++ ) {
//if ( string[i] == "+") {
//sum += Number(string.substring(partition, i));
//partition = i+1;
//}
//if( i == string.length - 1 ) {
//sum += Number(string.substring(partition, string.length));
//}
//}
//return sum;
//};
//console.log(addString("3+5+7")); // 15
//console.log(addString("20+7+3")); // 30
//console.log(addString("235+8472+2")); //8709

//function divideString ( string ) {
//var arrOfStrings = string.split('/');
//if (arrOfStrings[1] == 0) throw "DivideByZero error"
//return Number(arrOfStrings[0])/Number(arrOfStrings[1]);
//}

//console.log(divideString("10/20"));

//var add = function ( x, y ){
//return x + y;
//};

//var sum = fjs.reduce(add);
//currying demo?

//var nuString = "10-20-30";

var subtract = function(x, y) {
  return x - y;
};
var difference = fjs.reduce('x, y => x - y');

//var difference = fjs.reduce(subtract);

//console.log(fjs.reduce(subtract, "10-20-30"));

console.log(difference('10-20-30'.split('-')));

//console.log(sum([2, 3]));
