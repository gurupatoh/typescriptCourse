// let-block scope variable  && const
//var -global scope
var variable = "Test";
console.log(variable);
variable = "another test";
console.log(variable);
// block scope
function reset() {
    var variable = "Null";
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
var addNumber = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumber(12, 12));
// arrow function
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(12, 9));
var greetings = function () { return console.log("hello sir"); };
greetings();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("patrick");
// exercise
var myAge = function (age) { return console.log(age); };
myAge(24);
// default parameters
console.log("default parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
// exercise 
var calculateage = function (age) {
    while (age > 24) {
        age--;
    }
    console.log("my age is ", age);
};
calculateage(36);
// rest and spread -allow you to work with arrays-object store multiple objects  and list
var numbers = [23, 34, 67, 45, 12];
console.log(Math.max(23, 34, 67, 45, 12));
console.log(Math.max.apply(Math, numbers)); // spread operator
// rest 
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
// destructuring arrays
var myHobbies = ['cooking', 'reading', 'coding'];
//  console.log(myHobbies[0],myHobbies[1]);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// object destructuring
var userData = { userName: "patrick", age: 24 };
// const userName=userData.userName;
// const   =userData.age;
var myName = userData.userName, myAge = userData.age;
console.log(myName, myAge);
// exerise
var personInfo = {
    firstName: 'luciana', lastName: 'Nyanjau', job: 'Devops'
};
var firstName = personInfo.firstName, lastName = personInfo.lastName, job = personInfo.job;
console.log(firstName, lastName, job);
