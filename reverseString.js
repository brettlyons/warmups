//function reverseString( inString ) {
  //var output = "";
  //for ( var i = inString.length - 1 ; i >= 0 ; i-- ) {
      //output+= inString[i];
  //}
  //return output;
//};
//console.log(reverseString('')); // ''
//console.log(reverseString('foof')); // 'foof'
//console.log(reverseString('stringey')); // 'yegnirts'

//function reverseInPlace ( inputString ) {

//}

function reverse ( string  ) {
  return string.split('').reverse().join('');
}


//function rotateInPlace ( array ){
  //var offset = array.length-1;
  //var tmpLeft, tmpRight;
  //while ( offset != -1 ) {
    //console.log(tmpRight, tmpLeft);
    //tmpLeft = array[ offset ];
    //tmpRight = array[ array.length - offset  ];
    //offset--;
    //array[ array.length - offset ] = tmpLeft;
    //array[ array ] = tmpRight;
  //}
  //return array;
//}
function rotateInPlace ( array ){
  for ( var i = 0 ; i < array.length/2 ; i++ ){
    var tmp = array[i];
    array[i] = array[array.length - 1 - i]
    array[array.length-1 - i ] = tmp;
  }
  return array;
}

var myString1 = "Yellow Door";
var myString2 = "green forest";
console.log(rotateInPlace(myString1));
console.log(rotateInPlace(myString2));
console.log(myString1);
console.log(myString2);


function curriedSum( numberFoo){
  //new scope
  return function ( numberBar ){
   //new scope
   //both scopes combined are *lexical* scope . . .
    return numberFoo + numberBar;
  }
}

var curriedSum3 = curriedSum(3);
console.log(curriedSum3(4)); // should return 7

