
// Constructor pattern
let peopleConstructor = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  this.printPerson = function() {
    console.log('--- Constructor pattern ---')
    console.log(this.name + this.age + this.location);
  }
};

let constructorPerson = new peopleConstructor('John ', '20 ', 'CA');

constructorPerson.printPerson();

// Factory pattern

let peopleFactory = function(name, age, location) {
  let temp = {}

  temp.name = name;
  temp.age = age;
  temp.location = location;

  temp.printPerson = function() {
    console.log('--- Factory pattern ---')
    console.log(temp.name + temp.age + temp.location);
  };

  return temp;
};

let factoryPerson = peopleFactory('John ', '20 ', 'CA');

factoryPerson.printPerson();
