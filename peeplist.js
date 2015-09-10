var peopleList = ['Andrew', 'Andreas', 'Emily'];
people = []
for (var i = 0 ; i < peopleList.length ; i++) {
  people.push({id: i, name: peopleList[i]});
}
console.log(people[0]);
console.log(people[1]);
console.log(people[2]);

