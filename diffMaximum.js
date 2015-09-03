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

function max(orderableArray) {

  function go(currentMax, orderableArray) {
    return (orderableArray.length === 0) ? currentMax : function () { return go(smallMax(currentMax, orderableArray[0]), orderableArray.slice(1)); }
  }

  function smallMax(a,b) {
  if ( a <= b ) { return b; }
    return a;
  }
  var f = go(orderableArray[0], orderableArray.slice(1));
  while (typeof f == 'function' )  {
    f = f();
  }
  return f;
}

function range(n) {
  var output = [];
  for (var i = 0 ; i <= n ; ) {
    output.push(i++);
  }
  return output;
}

console.log(max(range(1000000)));
