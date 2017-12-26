
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
