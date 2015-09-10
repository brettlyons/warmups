var people = [
  {name: 'Mario', birthYear: 1960},
  {name: 'Luigi', birthYear: 1965},
  {name: 'Peach', birthYear: 1970},
  {name: 'Yoshi', birthYear: 1975}
]

// Map all of the names
// Map all of the birthYears
// Map all of the birthYears over 1965
// Map all of names for people who have birthYears before 1975

var allNames = people.map(function(person) {
  return person.name;
});
console.log(allNames);

var allBirthYears = people.map(function(person) {
  return person.birthYear;
});
console.log(allBirthYears);

var allbirthYearOver1965 = people.map(function(person) {
  return person.birthYear;
}).filter(function(person) {
  return person > 1964;
});
console.log(allbirthYearOver1965);

var namesOfBYO1965 = people.filter(function(person) {
  return person.birthYear > 1964;
}).map(function(person) {
  return person.name;
});
console.log(namesOfBYO1965);

