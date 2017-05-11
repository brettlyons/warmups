function charCounts(string) {
  function go(storageObj, string) {

    if (string !== '') { // definition of !base case (NOT base case)
      storageObj[ string[ 0 ] ] = storageObj[ string[ 0 ] ] + 1 || 1;
      return go(storageObj, string.slice(1)); // recursive call
    } // type mismatch in storageobj assignments "magically adjusted" by JS
    return storageObj;  // base case
  
  }
  return go({}, string); //first call/invocation of go
}
console.log(charCounts('This is a string!!!'));
console.log(charCounts('Another String'));
