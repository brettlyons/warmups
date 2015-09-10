//function named sumBy which takes an array of Objects, each of which has totalPrice and department properties. The function should return an Object containing the sum of totalPrice by department. Here is sample usage:
var fjs = require('functional.js');

var data = [
{department: 'Food', totalPrice: 10},
{department: 'Food', totalPrice: 14},
{department: 'Not Food', totalPrice: 2},
{department: 'Not Food', totalPrice: 682},

];
//helper function
var unique = fjs.nub('x, y -> x === y');

//console.log(sumBy(data));
// { Food: 24, 'Not Food' : 684  }
function sumBy(dataObj) {
  var totalSumObj = {}, value;
  //ty to andreas for soln here.
  for (var i = 0 ; i < data.length ; i++) {
    value = totalSumObj[dataObj[i].department] || 0;
    totalSumObj[dataObj[i].department] = value + dataObj[i].totalPrice;
  }
  return totalSumObj;
}
console.log(sumBy(data));


