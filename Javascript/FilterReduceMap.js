const nums = [1,2,3,4,5,6]

let evens = nums.filter(x=> x%2 == 0) 
console.log(evens);

let squares = nums.map(x=> x**2)
console.log(squares);
                    // a  is your carring value 
                    // b  is your current value
let sum = nums.reduce((a,b)=> a*b, 1)
console.log(sum);
