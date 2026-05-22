

// for(let a = 10; a != 0; a--){
//     console.log(a);
// }


// for(let i = 0; i< 10; i++){
//     console.log(i);
// }


let list = [30,50,10,40]

// for(let i = 0; i< list.length; i++){
//     console.log(list[i]);
// }

// for(value of list){
//     console.log(value);
// }

let i = 1;
while(i <= 6){
    document.write(`<h${i}>This is Heading</h${i}>`)
    i++;
}




let students = ["Shoeb","Jeevak","Mahendra","Khaled","Raiyan"];


for(std_name of students){
    document.write("<h1>"+std_name+"</h1>")   
    // document.write(std_name)   
}