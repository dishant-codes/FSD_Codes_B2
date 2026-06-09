const arr = [1,2,3]
// arr.push(4);
// console.log(arr);

    //  '...' = spread operator
const newArr = [...arr, 4]
///       [1,2,3,4]
console.log(newArr);




const user = {name:"Dishant",age: 30};
// X mutating
// user.age = 26; 

// immutable spread
const updated = {...user, age: 26}
console.log(updated);


