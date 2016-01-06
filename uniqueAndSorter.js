var R = require('ramda');

var testObj = [{key1: "1", key2: "6"},
               {key1: "10", key2: "2"},
               {key1: "11", key2: "7"},
               {key1: "11", key2: "8"},
               {key1: "11", key2: "7"},
               {key1: "3", key2: "9"},
               {key1: "20", key2: "0"}];

var getVal = R.curry(function (key, object) {
  return object[key];
});
// array of Objects -> array of value at object[key]

var unique = R.curry(function (key, collection) {
  return collection.reduce(function(accumulation, currentObj) {
    if(accumulation.indexOf(currentObj[key]) == -1 && currentObj[key] != "0") {
      accumulation.push(currentObj[key]);
    }
    return accumulation;
  }, []);
});

var uniqueKey1 = unique("key1");
var uniqueKey2 = unique("key2");

var sort = R.curry(function (fn, array) {
  return array.sort(fn);
});

var low = function (x, y) {
  return x - y; 
};

var high = function(x, y) {
  return y - x;
};

var sortHighestFirst = sort(high);
var sortLowestFirst = sort(low);

var getPos = R.curry(function (collection, n) {
  return collection.indexOf(n);
});


// TESTS:
console.log(sortHighestFirst(uniqueKey1(testObj))); // sorted, no zeros, no duplicates
console.log(uniqueKey1(testObj)); // unsorted, no zeros, no duplicates
console.log(sortLowestFirst(uniqueKey2(testObj))); // sorted, no zeroes, no duplicates
console.log(uniqueKey2(testObj)); // unsorted, no zeroes, no duplicates
