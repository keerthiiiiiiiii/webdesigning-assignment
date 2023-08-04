//creating an object using object literal notation
const person = {
    firstName : "keerthi",
    lastName : "N",
    age : 19,
    occupation : "Engineer",

    // method inside the object
    sayHello: function(){
        console.log(`Hello , my name is ${this.firstName}${this.lastName}. I am ${this.age} years old.`);
        
    },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
person.sayHello();