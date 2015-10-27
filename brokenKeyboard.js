// consider using Streams for optimization after it's working 
// filtering or mapping on the stream would be epically useful

var fs = require('fs');

function calcPossibleWords(availableLetters) {
  fs.readFile('enable1.txt', 'utf-8', function(err, data) {
    console.log(
      data
        .split('\r\n')
        .filter(function (element) {
          return element.split('').every(function (letter) {
            return (availableLetters.indexOf(letter) !== -1);
          }); // .every( fn (stuff)) and .some( fn (stuff)) are awesome
        }).sort(function (a, b) {
          return b.length - a.length;
        })[0]
        .toString()
    );
  });
}

calcPossibleWords('bnik');
calcPossibleWords('vybu');

//calcPossibleWords('poil');
//calcPossibleWords('deedeed');

function LinkedList(head, tail) {
  this.head = head;
  this.tail = tail;
}
var listToLog = function (list) {
  function go(remainingList) {
    if(remainingList.next == null) { return null; }
    console.log(remainingList);
    return go(remainingList.next);
  }
  f = function () { return go(list); }
  while(typeof f == 'function') {
    f = f();
  }
  return f;
}

var LLFromArray = function (array) {  
  function go(remainingArray, theList) {
    if(remainingArray.length == 0) { return theList; }
    return function () { return go(remainingArray, new LinkedList(remainingArray.pop(), theList)); }
  };
  var f = function () { return go(array, new LinkedList(array[0], null));}
  while(typeof f == 'function') {
    f = f();
  }
  return f;
}
function calcWordsLL (availableLetters) {
  fs.readFile('enable1.txt', 'utf-8', function(err, data) {
    wordList = new LinkedList (data.split('\r\n')[0], null);
    var lines = data.split('\r\n');
    var wordList = LLFromArray(lines);
    console.log(wordList);
  });
  
}
// calcWordsLL('some');

