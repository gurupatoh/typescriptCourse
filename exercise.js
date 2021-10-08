// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));
// solution one :arrow functions
var double = function (value) { return value * 2; };
console.log(double(2));
// excersices 2
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
// solution 2 
// approach:arrow function then provide default values
var greeting = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log("Hello, " + name);
};
greeting("Anna");
// exercise 3 
// solution using spread operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
console.log(Math.min.apply(Math, numbers)); // spread operator
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray)
// solution 4 
function newArray(args) {
    return args;
}
console.log(newArray([55, 20]));
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);
// solution 5
var testResults = [3.89, 2.99, 1.38];
var number1 = testResults[0], number2 = testResults[1], number3 = testResults[2];
console.log(number1);
// // Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
// solution 6 -Approach object destructuring 
var name = scientist.firstName, experience = scientist.experience;
console.log(name, experience);
