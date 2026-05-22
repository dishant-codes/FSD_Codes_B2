let data = [
    {
      name: "Jeevak",
      age: 24,
      course: "FSD"
    },
    {
      name: "Shoeb",
      age: 25,
      course: "FSD"
    },
    {
      name: "Mahendra",
      age: 25,
      course: "FSD"
    },
    {
      name: "Khaled",
      age: 23,
      course: "FSD"
    },
    {
      name: "Raiyan",
      age: 28,
      course: "FSD"
    },
    {
      name: "Kirti",
      age: 22,
      course: "FSD"
    },
]

console.log(data);

data.map((student)=>{
    console.log(student.name);
})


let studentDS = [
    {
      name: "Jayesh",
      age: 21,
      course: "DS"
    },
    {
      name: "Sofiyan",
      age: 19,
      course: "DS"
    }];



    
let upGradStudents = [...data,...studentDS];
    
console.log("with spread operator");
console.log(upGradStudents);

console.log("with .concat operator");
let newTest = data.concat(studentDS);
console.log(newTest);

