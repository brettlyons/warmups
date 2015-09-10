// This will seem trivial at this point, but imagine our "users" are actually stored somewhere else, and assume we _must_ use setTimeout to fetch those users. This will mimic what we see when we get to AJAX.

var users = [{name: 'User 1', age: 100},{name: 'User 2', age: 75},{name: 'User 3', age: 50},{name: 'User 4', age: 25}]

setTimeout(function() {
  var usersObj = getUsers(); // Using it twice, so asking 'server' for it only once.
  console.log((usersObj.map(function(usersArr) {
    return usersArr.age;
  }).reduce(function(sum, age) {
    return sum += age }, 0)) / usersObj.length);

  return (usersObj.map(function(usersArr) {
    return usersArr.age;
  }).reduce(function(sum, age) {
    return sum += age }, 0)) / usersObj.length;

  // Use the getUsers function to retrieve all users. Then, map their ages, and reduce to the average age.
}, 5000)

function getUsers() {
  return users;
};

console.log('I\'m doing other things');
console.log('I\'m doing other things');
console.log('I\'m doing other things');
