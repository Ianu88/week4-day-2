const myFunctions = require(`./nodemaths`);
console.log(myFunctions.add(2,5));
console.log(myFunctions.subtract(8,3));
console.log(myFunctions.multiply(2,5));
console.log(myFunctions.divide(8,3));

const {add, subtract} = require(`./nodemaths`);
const {multiply, divide} = require(`./nodemaths`);
console.log(add(2,5));
console.log(subtract(5,2));
console.log(multiply(2,5));
console.log(divide(5,2));