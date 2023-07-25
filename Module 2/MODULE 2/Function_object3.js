// Creating an object using constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year; 
}
// Creating instance (objects) of the car class
const car1 = new Car("Toyota", "Carolla", 2022);
const car2 = new Car("Honda", "Civic", 2021);

//Accessing object properties of car1 and car2
console.log(car1.make); // output: Toyota
console.log(car1.model); // output: Corolla
console.log(car1.year); // output: 2022

console.log(car1.make); // output: Honda
console.log(car1.model); // output: Civic
console.log(car1.year); // output: 2021