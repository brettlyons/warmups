//function parensChecker(string) {
  //var stringArr = string.split('');
  //var isZero = stringArr.reduce(function (prevVal, currElement){
    //if(currElement == '(') { prevVal += 1; }
    //if(currElement == ')' && prevVal > 0) { prevVal -= 1; }
    //return prevVal;
  //}, 0)
  //return Boolean(!isZero);
//}

console.log(parensChecker("()(((())))")); //=> true

console.log(parensChecker("())))(")); //=> false

console.log(parensChecker(")(")); //=> false

function parensChecker(string) {
  function go(string, stack) {
    if (string.length == 0) {
      return (stack.length < 1);
    }
    if( string[0] == '(' ) { stack.push(1); }
    if(string[0] == ')') { stack.pop(1); }

    return go(string.slice(1), stack)
  }
  return go(string, [])
}
