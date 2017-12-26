// Prototype pattern

let peopleDynamicProto = function(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;

  if(typeof this.printPerson !== 'function') {
    peopleDynamicProto.prototype.printPerson = function() {
      console.log(this.name + ' ' + this.age + ' ' + this.location);
    };    
  }
};


let person = new peopleDynamicProto('John', 22, 'CA');

person.printPerson();
