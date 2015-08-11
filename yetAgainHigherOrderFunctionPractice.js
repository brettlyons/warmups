var people = [
  {firstName: "Hyman", lastName: "Runte", country: "United States", age: 23},
  {firstName: "Zachery", lastName: "Ondricka", country: "US", age: 59},
  {firstName: "Adriana", lastName: "Bogan", country: "CAN", age: 36},
  {firstName: "Meda", lastName: "Macejkovic", country: "Canada", age: 58},
  {firstName: "Gerardo", lastName: "O'Reilly", country: "CAN", age: 23},
  {firstName: "Fredy", lastName: "Kuhlman", country: "IRL", age: 10},
  {firstName: "Thelma", lastName: "Eichmann", country: "United States", age: 73},
  {firstName: "Hector", lastName: "Wilderman", country: "CAN", age: 71},
  {firstName: "Queen", lastName: "Corkery", country: "CAN", age: 91},
  {firstName: "Torrey", lastName: "Larson", country: "Canada", age: 10},
  {firstName: "Zella", lastName: "Stracke", country: "CAN", age: 84},
  {firstName: "Harry", lastName: "Frami", country: "UK", age: 34},
  {firstName: "Oma", lastName: "Greenholt", country: "England", age: 28},
  {firstName: "Mattie", lastName: "Hintz", country: "US", age: 65},
  {firstName: "Edyth", lastName: "Raynor", country: "US", age: 77},
  {firstName: "Jessie", lastName: "Legros", country: "England", age: 21},
  {firstName: "Rosalee", lastName: "Schmeler", country: "US", age: 69},
  {firstName: "Nyasia", lastName: "Block", country: "US", age: 37},
  {firstName: "Josh", lastName: "Gleichner", country: "Canada", age: 72},
  {firstName: "Jordon", lastName: "Kuhlman", country: "IRL", age: 81},
  {firstName: "Yvonne", lastName: "Quitzon", country: "CAN", age: 92},
  {firstName: "Abner", lastName: "Kunde", country: "Ireland", age: 7},
  {firstName: "Sandrine", lastName: "Smitham", country: "CAN", age: 50},
  {firstName: "Simone", lastName: "Zboncak", country: "US", age: 74},
  {firstName: "Sheldon", lastName: "Beier", country: "Canada", age: 56},
  {firstName: "Kira", lastName: "Spinka", country: "US", age: 81},
  {firstName: "Reymundo", lastName: "Ryan", country: "CAN", age: 91},
  {firstName: "Clint", lastName: "Carter", country: "United States", age: 6},
  {firstName: "Nadia", lastName: "Leuschke", country: "CAN", age: 41},
  {firstName: "Lily", lastName: "Connelly", country: "US", age: 73},
  {firstName: "Lola", lastName: "Cormier", country: "United States", age: 41},
  {firstName: "Tara", lastName: "Goodwin", country: "US", age: 40},
  {firstName: "Jaycee", lastName: "Lynch", country: "US", age: 15},
  {firstName: "Gilbert", lastName: "Hane", country: "England", age: 1},
  {firstName: "Josh", lastName: "Bosco", country: "US", age: 18},
  {firstName: "Edwin", lastName: "Greenholt", country: "UK", age: 85},
  {firstName: "Antoinette", lastName: "Hessel", country: "United States", age: 3},
  {firstName: "Ernestine", lastName: "Metz", country: "UK", age: 6},
  {firstName: "Lazaro", lastName: "Gutkowski", country: "US", age: 95},
  {firstName: "Oran", lastName: "Dietrich", country: "Ireland", age: 38},
  {firstName: "Olin", lastName: "Lowe", country: "UK", age: 2},
  {firstName: "Jennie", lastName: "Lubowitz", country: "UK", age: 59},
  {firstName: "Mario", lastName: "Murazik", country: "Canada", age: 39},
  {firstName: "Efren", lastName: "Gislason", country: "IRL", age: 63},
  {firstName: "Adrianna", lastName: "Keebler", country: "IRL", age: 89},
  {firstName: "Miller", lastName: "Connelly", country: "Ireland", age: 1},
  {firstName: "Felicita", lastName: "Kling", country: "IRL", age: 28},
  {firstName: "Johanna", lastName: "Bashirian", country: "CAN", age: 57},
  {firstName: "Cristopher", lastName: "Borer", country: "England", age: 48},
  {firstName: "David", lastName: "Gottlieb", country: "US", age: 65},
  {firstName: "Maud", lastName: "Altenwerth", country: "UK", age: 32},
  {firstName: "Carolanne", lastName: "Emard", country: "Ireland", age: 47},
  {firstName: "Joanny", lastName: "Bernier", country: "US", age: 94},
  {firstName: "Fatima", lastName: "Fahey", country: "US", age: 82},
  {firstName: "Mia", lastName: "Osinski", country: "Ireland", age: 71},
  {firstName: "Edna", lastName: "Marquardt", country: "US", age: 40},
  {firstName: "Dana", lastName: "Rice", country: "UK", age: 67},
  {firstName: "Grover", lastName: "Keebler", country: "Ireland", age: 35},
  {firstName: "Henry", lastName: "McCullough", country: "IRL", age: 14},
  {firstName: "Abby", lastName: "Kling", country: "IRL", age: 77},
  {firstName: "Delphia", lastName: "Turcotte", country: "England", age: 20},
  {firstName: "Edgardo", lastName: "Bednar", country: "IRL", age: 71},
  {firstName: "Gust", lastName: "Leffler", country: "CAN", age: 7},
  {firstName: "Dorian", lastName: "Harvey", country: "Canada", age: 86},
  {firstName: "Reanna", lastName: "Hand", country: "IRL", age: 12},
  {firstName: "Edd", lastName: "Towne", country: "UK", age: 77},
  {firstName: "Miracle", lastName: "Jenkins", country: "United States", age: 22},
  {firstName: "Verda", lastName: "Oberbrunner", country: "US", age: 62},
  {firstName: "Destini", lastName: "Bartoletti", country: "IRL", age: 43},
  {firstName: "Tamara", lastName: "Dach", country: "Canada", age: 98},
  {firstName: "Valentin", lastName: "Beatty", country: "CAN", age: 86},
  {firstName: "Robert", lastName: "Tromp", country: "CAN", age: 78},
  {firstName: "Carroll", lastName: "Weber", country: "Canada", age: 71},
  {firstName: "Holly", lastName: "Cummerata", country: "US", age: 54},
  {firstName: "Kiera", lastName: "VonRueden", country: "US", age: 97},
  {firstName: "Mac", lastName: "Lubowitz", country: "Canada", age: 78},
  {firstName: "Janis", lastName: "Marvin", country: "IRL", age: 84},
  {firstName: "Carmen", lastName: "Herzog", country: "CAN", age: 76},
  {firstName: "Maia", lastName: "Hegmann", country: "England", age: 1},
  {firstName: "Susana", lastName: "Langworth", country: "CAN", age: 98},
  {firstName: "Curtis", lastName: "Rosenbaum", country: "IRL", age: 39},
  {firstName: "Ines", lastName: "Morar", country: "Canada", age: 88},
  {firstName: "Aron", lastName: "Jones", country: "IRL", age: 41},
  {firstName: "Moshe", lastName: "Ondricka", country: "IRL", age: 61},
  {firstName: "Felicia", lastName: "Turcotte", country: "Ireland", age: 36},
  {firstName: "Florencio", lastName: "Hudson", country: "IRL", age: 9},
  {firstName: "Victor", lastName: "Crooks", country: "UK", age: 28},
  {firstName: "George", lastName: "Lind", country: "England", age: 21},
  {firstName: "Madelynn", lastName: "Graham", country: "US", age: 16},
  {firstName: "Pat", lastName: "Zemlak", country: "UK", age: 95},
  {firstName: "Lexi", lastName: "Stoltenberg", country: "United States", age: 7},
  {firstName: "Brigitte", lastName: "Moen", country: "CAN", age: 83},
  {firstName: "Orville", lastName: "Harber", country: "US", age: 16},
  {firstName: "Yvonne", lastName: "Cremin", country: "Canada", age: 94},
  {firstName: "Casandra", lastName: "Wiegand", country: "CAN", age: 92},
  {firstName: "Noemie", lastName: "Lind", country: "CAN", age: 68},
  {firstName: "Lexie", lastName: "Spinka", country: "England", age: 10},
  {firstName: "Hassan", lastName: "Macejkovic", country: "IRL", age: 58},
  {firstName: "Keira", lastName: "Cronin", country: "UK", age: 79},
  {firstName: "Cassandre", lastName: "Blanda", country: "Canada", age: 78}

];


//1. Output the last names of all people from North America who have a firstName that
//begins with L

//2. Output the countries of all people over 60 years old, all countries should be listed
// in the same format (either full name or country code)


//3 Produce an object that contains a count of people by country, it would look like:
// {"United States": X, "Canada": Y, etc...}


var isFromUS = function ( obj ) {
  return obj.country === "US" || obj.country ==="United States";
}

var isFromCanada = function ( obj ) {
  return obj.country === "CAN" || obj.country === "Canada";
}

var isFromEngland = function ( obj ) {
  return obj.country === "UK" || obj.country === "England";
}
var isFromIRL = function ( obj ) {
  return obj.country === "IRL" || obj.country === "Ireland";
}

var isFromNorthAmerica = function ( obj ) {
  return isFromCanada( obj ) || isFromUS( obj );
}

var firstNameBeginsWithL = function ( obj ) {
  return obj.firstName[0] === "L";
}

var lastNameFromFirst = function ( obj ) {
  return obj.lastName;
}

var lastNamesFromNA = function ( people ) {
  return people
    .filter(firstNameBeginsWithL)
    .filter(isFromNorthAmerica)
    .map(lastNameFromFirst);
}
console.log(lastNamesFromNA(people)); // this logs the results of #1

//2. Output the countries of all people over 60 years old, all countries should be listed
// in the same format (either full name or country code)

var over60 = function ( obj ) {
  return obj.age > 60;
}
var countryFromObj = function ( obj ){
  if ( obj.country.length < 4 ) { return countryConvert( obj.country ) }
  return obj.country;
}

var countryConvert = function ( country ) {
  if ( country === "US" ) { return "United States"; }
  if ( country === "IRL" ) { return "Ireland"; }
  if ( country === "CAN" ) { return "Canada"; }
  if ( country === "UK" ) { return "England"; }
  return country;
}

var countriesOfOver60 = function ( people ) {
  return people
    .filter(over60)
    .map(countryFromObj);
}
console.log(countriesOfOver60(people)); // this logs an Array for # 2

// 3. Produce an object that contains a count of people by country, it would look like:
// {"United States": X, "Canada": Y, etc...}
var sum = function ( x, y ) {
  return x + y;
}

var countOfPeopleByCountry = function ( people ) {
  var numUK =  people.map(countryConvert).filter(isFromEngland).length;
  var numIRL = people.map(countryConvert).filter(isFromIRL).length;
  var numUS = people.map(countryConvert).filter(isFromUS).length;
  var numCAN = people.map(countryConvert).filter(isFromCanada).length;
  return {"United States": numUS, "Canada": numCAN, "Ireland":numIRL, "England":numUK}
}

console.log(countOfPeopleByCountry ( people )) // this solves #3.
