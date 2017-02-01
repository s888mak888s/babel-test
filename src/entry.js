var Sample = require('./sample.js');
var Person = require('./person.js');

var sample = new Sample;
sample.getNumber(); // -> Number is 1
sample.setNumber(5);
sample.getNumber(); // -> Number is 5

var person = new Person(1, 'sakurai', 19840914)
console.log(person.toString())
console.log(person)
console.log(person.name)
console.log(person.MAX_ID)
console.log(Person.author)
console.log(person.author)
console.log(Person.AUTO_ID)
console.log(person.AUTO_ID)
console.log(Person.ja())
// console.log(person.ja())
