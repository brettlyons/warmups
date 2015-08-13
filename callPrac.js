//Mammal Constructor
function Mammal(name, age){
  this.name = name;
  this.age = age;
  this.offspring = [];
}

// Mammal Methods
Mammal.prototype.procreate = function(){
  var createOffsprint = new Mammal("Baby "+ this.name);
  this.offspring.push(createOffsprint);
};
Mammal.prototype.toString = function() {
  var output = [];
  for (var i = 0; i < this.offspring.length; i++) {
    output.push(this.offspring[i].name);
  }
  return output.join('\n');
};

var someMammal = new Mammal('Chester', 22);
console.log(someMammal.toString());

// example of Dog constructor with `call`
function Dog(name, age, breed){
  this.breed = breed;
  Mammal.call(this, name, age);
}

// example of Dog constructor with `apply`
function Dog(name, age, breed){
  this.breed = breed;
  Mammal.apply(this, arguments);
}

// set the prototype to be a new object that has the Mammal prototype as its prototype. This establishes the prototypal inheritance chain.
Dog.prototype = Object.create(Mammal.prototype);

// reset the constructor property from Mammal to Dog
//Dog.prototype.constructor = Dog;
// to test this, comment/uncomment it.  The console logs below will show
// the difference between constructors

var becky = new Dog("becky", 8, "Newfoundland");
console.log(Dog.prototype.constructor)
console.log(typeof becky);
console.log(becky);
