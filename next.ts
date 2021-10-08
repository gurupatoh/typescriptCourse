// let-block scope variable  && const
//var -global scope
let variable="Test";
console.log(variable);
variable="another test";
console.log(variable);
// block scope
function reset(){
    let variable="Null";
    console.log(variable);

}
reset();
console.log(variable)
// arrow functions
const addNumber =function(number1:number,number2:number):number{
    return number1 + number2;


}
console.log(addNumber(12,12)); 
// arrow function
const multiplyNumbers=(number1:number,number2:number) =>  number1*number2;
console.log(multiplyNumbers(12,9));
const greetings = () => console.log("hello sir");
greetings();
const greetFriend =(friend:any) => console.log(friend);
greetFriend("patrick")
// exercise
const myAge = (age:any)  => console.log(age);
myAge(24)
// default parameters
console.log("default parameters");
const countdown = (start:number=10):void =>{
    console.log(start);
    while(start>0){
        start--;

    }
    console.log("Done", start);

}
countdown();
// exercise 
const calculateage = (age:number):void =>{
    while(age>24){
        age--;

    }
    console.log("my age is ",age);
}
calculateage(36);
// rest and spread -allow you to work with arrays-object store multiple objects  and list


const numbers =[23,34,67,45,12]
console.log(Math.max(23,34,67,45,12));
console.log(Math.max(...numbers)); // spread operator
// rest 
 function makeArray(...args:any) {

    return args;
}
console.log(makeArray(1,2,3));
// destructuring arrays
 const myHobbies =['cooking','reading','coding']
//  console.log(myHobbies[0],myHobbies[1]);
 const [hobby1,hobby2]=myHobbies;
 console.log(hobby1,hobby2);

// object destructuring
const userData={userName:"patrick",age:24}
// const userName=userData.userName;
// const   =userData.age;
const {userName:myName,age:myAge}=userData;

 console.log(myName,myAge); 
 // exerise
 let personInfo={
firstName:'luciana',lastName:'Nyanjau',job:'Devops'
 }
 let {firstName,lastName,job}=personInfo
 console.log(firstName,lastName,job);