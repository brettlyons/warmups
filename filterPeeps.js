// configureIsBad :: Property -> ( Person -> Boolean)
function configureIsBad ( field ) {
  return function ( person ) {
    return person[field] == false || person[field] == undefined || person[field] == null || person == 0;
  };
}  // not actually necessary -- But soooo reusable!

// isBadName :: Person -> Boolean
const isBadName = configureIsBad ( 'name' ); // I hear null checking is really a thing. 

// isBadAge :: Person -> Boolean
const isBadAge = configureIsBad( 'age' );

// removeBadPeople :: [Person] -> [Person]
function removeBadPeople ( people ) {
  return people.filter(isBadName);
}
// add :: Number -> Number -> Number
function sum ( x, y ) { return x + y; }

// getAge :: Person -> Number
function getAge ( person ) {
  if (person.age) {
    return person.age;
  }
  return 0;
}

// sumAgesAll :: [Person] -> Number
function sumAgesAll ( people ) {
  people.reduce(function (total, currentPerson) {
    return sum(total, getAge(currentPerson));
  }, 0);
}
