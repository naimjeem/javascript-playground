// Prototype pattern

let peopleProto = function() { };

peopleProto.prototype.name = 'no name';
peopleProto.prototype.age = 0;
peopleProto.prototype.location = 'no location';

peopleProto.prototype.printPerson = function() {
  console.log(this.name + ' ' + this.age + ' ' + this.location);
};

let person = new peopleProto();
person.name = 'Naim jeem';
person.age = 23;
person.location = 'BD';

person.printPerson();
