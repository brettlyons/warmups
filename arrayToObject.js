// nested arrays to objects, example below.

function bookDataArrayToObject(array) {
  var output = {};
  output.title = array[0];
  output.author = array[1];
  output.isbn10 = array[2];
  return output;
}

function bookData(arrayOfArrays) {
  function go(array, output) {
    if(array.length == 0) { return output; } 



    output[array[0][array[0].length - 1]] = bookDataArrayToObject(array[0]);

    return function() { return go(array.slice(1), output); };
  }
  var tailFunc = go(arrayOfArrays, {});
  while(typeof tailFunc == 'function') {
    tailFunc = tailFunc(); 
  }
  return tailFunc;  // Solves the problem of stack size and speed.  Performs at speed of while loop.  Only 1 stack insert too. 
}

var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]
console.log(bookData(books))
// //-> {
//   "1934356360": {
//     "title": "Learn to Program",
//     "author": "Chris Pine",
//     "isbn10": 1934356360
//   },
//   "1593275846": {
//     "title": "Eloquent Javascript",
//     "author": "Marijn Haverbeke",
//     "isbn10": 1593275846
//   }
// }
