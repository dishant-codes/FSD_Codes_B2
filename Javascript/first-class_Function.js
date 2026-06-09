const addition = (a, b) =>{
    return a+b;
}
console.log(addition(3,7));

const Obj = {
    first:()=>{
        console.log("First Called");
    },
    second: ()=>{
        console.log("Second Class");
    }
}

Obj.first();
Obj.second();


const multipler = function (n){ // n = 3
   return function(x){ // x = 5
    return x * n; // x * n : 5 * 3
   }
}


let triple = multipler(3);
console.log(triple(5)); // 15



// function greet(message){
//    return message;
// }

const displayer = (name)=>{
    return (message)=>{
        return message + name
    }
}

let greet = displayer("Dishant");
console.log(greet("Good Morning,"));




