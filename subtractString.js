//var fjs = require('functional.js');
//takes a string of arithmitic and returns the correct result

//function subtractString ( string ) {
//  new versions of this function will take operation as a function
  //var arrOfStrings = string.split('-');
    //return arrOfStrings.slice(1).reduce( function ( total, element ) {
      //return total -= Number(element);
    //}, arrOfStrings[0] );
//}

function addString ( string ) {
  var sum = 0;
  var partition = 0;
  for( var i = 0 ; i < string.length ; i++ ) {
    if ( string[i] == "+") {
      sum += Number(string.substring(partition, i));
      partition = i+1;
    }
    if( i == string.length - 1 ) {
      sum += Number(string.substring(partition, string.length));
    }
  }
  return sum;
};
console.log(addString("3+5+7")); // 15
console.log(addString("20+7+3")); // 30
console.log(addString("235+8472+2")); //8709
//console.log(subtractString('10-20-30'));

//function divideString ( string ) {
  //var arrOfStrings = string.split('/');
  //if (arrOfStrings[1] == 0) throw "DivideByZero error"
  //return Number(arrOfStrings[0])/Number(arrOfStrings[1]);
//}

//console.log(divideString("10/20"));
//this is a functional.js feature, a 'lambda expression'
//var add = function ( x, y ){
  //return x + y;
//};

//var sum = fjs.reduce(add);

//var subtract = function ( x, y ) {
  //return x - y;
//};

//var difference = fjs.reduce(subtract)

//console.log(difference([2, 3]));
//console.log(sum([2, 3]));
