let total = 0;

const addtoTotal = n =>{
    total += n;  // side effect
    return total;
};

console.log(addtoTotal(5));   // 5
console.log(addtoTotal(5));   // 10


// Pure Function 

const add = (a,b)=>a+b;

console.log(add(2,8)); // 10
console.log(add(2,8)); // 10



