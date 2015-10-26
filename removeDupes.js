function removeDupes(string) {
  return string.split('')
    .reduce(function (collectionObject, currentLetter) {
      if(collectionObject.indexOf(currentLetter) === -1) {
        collectionObject.push(currentLetter);
      }
      return collectionObject;
  }, []).join('');
}

console.log(removeDupes("AaBbAaAaAaBbBbBbBb"));
console.log(removeDupes('cAtCaT')); 

function removeDupesInsensitive(string) {
  return string.split('')
    .reduce(function (collection, currentLetter) {
      if(collection.indexOf(currentLetter.toLowerCase()) === -1  && collection.indexOf(currentLetter.toUpperCase()) === -1) {
        collection.push(currentLetter);
      }
      return collection;
  }, []).join('');
}
console.log(removeDupesInsensitive('cAtCaT'));

function caseSensitive(string, character) {
  return (string.indexOf(character) === -1);
}

function caseInsensitive(string, character) {
  return ( string.indexOf(character.toLowerCase()) === -1
          && string.indexOf(character.toUpperCase()) === -1 )
}

function removeDupesWith(string, comparisonFn) {
  return string.split('')
    .reduce(function (collectionObject, currentLetter) {
      if(comparisonFn(collectionObject, currentLetter)) {
        collectionObject.push(currentLetter);
      }
      return collectionObject;
  }, []).join('');
}

console.log(removeDupesWith("AaBb", caseSensitive));
console.log(removeDupesWith("AaBb", caseInsensitive))
console.log(removeDupesWith("AaAaBbBb", caseSensitive));
console.log(removeDupesWith("AaAaBbBb", caseInsensitive));
console.log(removeDupesWith("cAtCaT", caseSensitive));
console.log(removeDupesWith("cAtCaT", caseInsensitive));


// function removeDupesRecur(string) {
//   function go(remainingArray, collection) {
//     if(remainingArray.length == 0) { return collection; }
//     if(collection.indexOf(remainingArray[0]) === -1) {
//       collection.push(remainingArray[0]);
//     }
//     return go(remainingArray.slice(1), collection); 
//   }
//   var f = go(string.split(''), []);
//   while(typeof f == 'function') {
//     f = f();
//   }
//   return f.join('');
// }

// console.log(removeDupesRecur("AaBb"));
// console.log(removeDupesRecur("AaBb"));
// console.log(removeDupesRecur("AaAaBbBb"));
// console.log(removeDupesRecur("AaAaBbBb"));
// console.log(removeDupesRecur("cAtCaT"));
// console.log(removeDupesRecur("cAtCaT"));
