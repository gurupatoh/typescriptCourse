function combine (input1:number|string,input2:number|string){
let result;
    if(typeof input1==='number' && typeof input2==='number'){
    const result=input1+input2;

}
else{
    result=input1.toString()+input2.toString();
}
return result;
}

let age=combine(12,56);
console.log(age); 
let names = combine('patrick', 'julius');
console.log(names);
 