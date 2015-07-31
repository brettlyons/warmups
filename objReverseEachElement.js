//1.) the 'this' keyword refers to a property
//within an object from a method within that obj.


//function reverseEachElement ( arrOfStrings ) {
  //var output = [];
  //var ntmpString = '';
  //for ( var i = arrOfStrings.length-1 ; i >= 0 ; i--) {
    //for ( var j = arrOfStrings[i].length-1 ; j >= 0 ; j--) {
      //ntmpString += arrOfStrings[i][j];
    //}
  //output.push(ntmpString);
  //ntmpString = '';
  //}
//return output;
//};

//console.log(reverseEachElement ( [ 'cat', 'dog', 'horse' ] ));
//console.log(reverseEachElement ( [ 'rocky mountain goat' ] ));


function averagePairs ( inArr ) {
  var output = [];
  for ( var i = 1 ; i < inArr.length ; i++ ) {
    output.push((inArr[i-1] + inArr[i])/2);
  }
return output;
};
console.log(averagePairs([2, 6, 5, 5, 5]));
console.log(averagePairs([2,6,8,3,3]));
console.log(averagePairs([1,2,3,4,5]));
