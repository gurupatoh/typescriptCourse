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
   