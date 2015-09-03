//do it recursively, using an inner f ( currMax, remaining list slice )
  //maybe put it into a while(typeof f = function) { etc }
//}

//function max(orderableArray) {

  //function go(currentMax, orderableArray) {
    //return (orderableArray.length === 0) ? currentMax : go(smallMax(currentMax, orderableArray[0]), orderableArray.slice(1));
  //}

  //function smallMax(a,b) {
  //if ( a <= b ) { return b; }
    //return a;
  //}
  //return go(orderableArray[0], orderableArray.slice(1));
//}

// I recommend understanding the implementation between lines 5 and 16 before
// attempting to grok what is going on with the one between 23 - 42
// inspired by
// http://stackoverflow.com/questions/23498939/tail-recursion-optimization-for-javascript

function max(orderableArray) {

  function go(currentMax, orderableArray) {
    return (orderableArray.length === 0) ?
      currentMax : function () {
        return go(smallMax(currentMax, orderableArray[0])
            , orderableArray.slice(1)); }
  }

  function smallMax(a,b) {
   return ( a <= b ) ? b : a ;
  }

  var f = go(orderableArray[0], orderableArray.slice(1));
  while (typeof f == 'function' )  {
    f = f();
  }
  return f;
}

function range(n) { // just for testing
  var output = [];
  for (var i = 0 ; i <= n ; ) {
    output.push(i++);
  }
  return output;
}

// you can run this like time node diffMaximum.js to time the output;
// also, if you uncomment the top implementation, and comment the middle one
// it won't work beyond about 1000 elements

console.log(max(range(100000)));
