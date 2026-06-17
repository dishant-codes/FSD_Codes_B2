function calculator(...myOperations){
    // console.log(...myOperations);

    let result = add(5,3);
    console.log(result);
    
    
}


const add = (a,b) => a+b;
const sub = (a,b) => a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;
const mod = (a,b) => a%b;


calculator(add, sub, mul, div, mod);