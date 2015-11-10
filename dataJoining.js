const customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
];

const orders = [
  {id: 1, customerId: 1, date: '5/5/2012'},
  {id: 2, customerId: 1, date: '6/2/2014'},
  {id: 3, customerId: 2, date: '5/16/2015'},
  {id: 4, customerId: 3, date: '1/1/2012'},
  {id: 5, customerId: 4, date: '1/24/2014'},
  {id: 6, customerId: 2, date: '7/26/2014'},
];

//Challenge #1 - Write a function that takes in an array of objects such as
//customers, and indexes them by their id property. 

function index(arrayOfObjects) {
  return arrayOfObjects.reduce(function(collector, object) {
    collector[object.id] = object;
    return collector;
  },{});
}

console.log('------------------------------------')
console.log(index(customers));

//Challenge #2 - Write a function that takes in an array of objects
//such as orders and groups them by their customerId. When passed orders,
//the result should be:

function groupBy(arrayOfObjects) {
  return arrayOfObjects.reduce(function(collector, object) {
    if (!collector[object.customerId]) { collector[object.customerId] = []; }
    collector[object.customerId].push(object);
    return collector;
  }, {})
}
console.log('------------------------------------')
console.log(groupBy(orders));

//Challenge #3 - Write a function that takes in two arrays, such as orders and
//customers, and replaces the order's customerId field with the actual customer
//object.

// function specificZipJoinReduced(array1, array2) {
//   return array1.reduce(function(collector, val) {
//     val.customer = array2[val.customerId];
//     delete val.customerId;
//     collector.push(val);
//     return collector;
//   }, []);
// }
// console.log('------------------------------------')
// console.log(specificZipJoinReduced(orders, customers));

function specificZipJoin(array1, array2) {
  function go(array1, array2, collectorArray) {
    if (array1.length == 0) { return collectorArray; }

    array1[0].customer = array2[array1[0].customerId];
    delete array1[0].customerId;
    collectorArray.push(array1[0]);

    return go(array1.slice(1), array2, collectorArray);
  }
  return go(array1.slice(), array2.slice(), []);
}
console.log('------------------------------------');
console.log(specificZipJoin(orders, customers));

