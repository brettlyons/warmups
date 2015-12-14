//person with name home work
//home with city state zip
//work with city state zip
//state with name and abbreviation

// var theState = {
//   name: "Name of state",
//   abbreviation: "ABBRV of st."
// };

// var person = {
//   name: "Persons name",
//   home: {city: "Some city", state: theState},
//   work: {city: "Some city", state: theState}
// };

var person = {};
var homeAddress = {};
var workAddress = {};
var state = {};

person.name = "persons name";
homeAddress.city = "Some city";
homeAddress.state = state;
workAddress.city = "Some city";
homeAddress.state = state;

person.home = homeAddress;
person.work = workAddress;

state.name = "name of state";
state.abbreviation = "abbrev. of st.";
