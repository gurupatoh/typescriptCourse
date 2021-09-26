"use strict";
var person = {
    name: "patrick",
    age: 24,
    hobbies: ['sport', 'chess'],
    role: [2, 'author'] // tuple -fixed lenght array 
};
// explicitly set a variable
person.role.push('admin');
// person.role[1]=10;
var FavouriteActivities; // support multiple types
FavouriteActivities = ['sports'];
var favouriteHobbies;
favouriteHobbies = ['swimming'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
// never type -functions
// utility functions
function generateError(message, code) {
    throw { message: message, errorcode: code };
    // while(true){}
}
var result = generateError('An error  occured', 403);
console.log(result);
// summary
// assigned types in js -run time and ts-static types(development)
