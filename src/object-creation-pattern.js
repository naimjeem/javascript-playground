// Constructor pattern
let peopleConstructor = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  this.printPerson = function() {
    console.log(this.name + this.age + this.location);
  }
};

let person1 = new peopleConstructor('John ', '20 ', 'CA');
let person2 = new peopleConstructor('Doe ', '21 ', 'SA');

person1.printPerson();
person2.printPerson();
