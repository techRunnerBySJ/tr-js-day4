// The significance of the this keyword in JavaScript
const person = {
    name: 'Tech Runner',
    sayHi: function() {
      console.log(`Hi, my name is ${this.name}.`);
    }
  };
  
  person.sayHi(); // Hi, my name is John.
  