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

let person = peopleFactory('John ', '20 ', 'CA');

person.printPerson();
