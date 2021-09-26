function combine (input1:number|string,input2:number|string,ResultConversion:string){ // union types
let result:any;
    if(typeof input1==='number' && typeof input2==='number'){
    const result=input1+input2; 

}
else{
    result=input1.toString()+input2.toString();
} 
if (ResultConversion==='as-number'){
    return +result;
}else{
    return result.toString(); 
}
}

let age=combine(12,56,'as-number');
console.log(age); 
let ageconversion=combine('12','56','as-number');
console.log(ageconversion);

let names = combine('patrick', 'julius','as-text');
console.log(names); 
 