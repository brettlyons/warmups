//var array = ['foo.jpg', 'foo.pdf', 'foo.somethingelse', 'baz.jpg']
//
//var myArr = array.filter(function(elem) {
    //return elem.indexOf('.jpg') > -1;
//});

//var myArr = array.filter(isJpg);

//function isJpg ( arr ) {
  //return arr.indexOf('.jpg') > -1;
//};

//console.log(myArr);
//

//Suppose you are given the following array;
//var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];
// Write a function named slowFoxes which takes a list of foxTypes as a
// parameter and returns an array of foxes which are not Swift Fox.
var foxTypes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];

//function slowFoxes ( foxTypes ) {
  //return foxTypes.filter(function ( fox ) {
    //return fox != 'Swift Fox';
  //});
//}
//var mySlowFox = slowFoxes ( foxTypes );
//console.log(mySlowFox);


var testScores = [100, 99, 92, 93, 48, 74, 64, 22, 46, 86];

function passingScores( arrOfScores ) {
  return arrOfScores.filter(function ( score ) {
    return score > 69;
  });
}
console.log(passingScores(testScores));


