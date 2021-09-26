const person:{
    name:string; 
    age:number;
    hobbies:string[];
    role:[number,string];
 
} ={
    name :"patrick",
    age : 24,
    hobbies:['sport','chess'],
     role: [2, 'author'] // tuple -fixed lenght array 
}; 
// explicitly set a variable
person.role.push('admin')
// person.role[1]=10;
let FavouriteActivities:any[];// support multiple types
FavouriteActivities=['sports']
let favouriteHobbies :string[];
favouriteHobbies=['swimming']
console.log(person.name);   
  for(const hobby of person.hobbies){
       console.log(hobby.toUpperCase());
  }
// never type -functions
// utility functions
  function generateError(message:string,code:number){
      throw{message:message,errorcode:code};
    // while(true){}
  }
 const result= generateError('An error  occured',403)
console.log(result);
// summary
// assigned types in js -run time and ts-static types(development)
   