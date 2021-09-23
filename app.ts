function add(number1:number,number2:number,ShowResult:boolean,phrase:string){
    const result=number1+number2;
    if(ShowResult){

        console.log( phrase + result); 
    } else{
        return number1 + number2;

    }    

}  
let number1='10'
let number2=12
let printResult = true;
const ResultPhrase='Result is:'
add(+number1,+number2,printResult,ResultPhrase)
