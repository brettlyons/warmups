const testData = [
  {kidId: 1, kidName: 'Ed', toyName: 'Teddy Bear'},
  {kidId: 1, kidName: 'Ed', toyName: 'Car'},
  {kidId: 2, kidName: 'Su', toyName: 'Teddy Bear'},
];

// testData listed above should return this
// [
//   {kidId: 1, kidName: 'Ed', toys: ['Teddy Bear', 'Car']},
//   {kidId: 2, kidName: 'Su', toys: ['Teddy Bear']},
// ]

// function unjoin(dataArray) {
//   dataArray.reduce(function(collection, current) {

//   });
// }





// maybe abstract out which field to compare for similarities
function unjoin(dataArray) {
// unjoin expects an array of objects with some identical fields
  function go(remainingArray, collection, idCache) {
    if (remainingArray.length === 0) { return collection; }

    if(!idCache[remainingArray[0].kidId]) { idCache[remainingArray[0].kidId] = true }

    if(idCache[remainingArray[0].kidId]) {
      collection[collection.indexOf(idCache[remainingArray[0].kidId])]
    }
    return(remainingArray.slice(1), collection, idCache);
  }
  return go(dataArray, [], {});
}
