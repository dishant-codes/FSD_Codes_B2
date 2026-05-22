const car = {
    modal: "Volvo",
    color: "Silver",
    modal_number: 1234,
    start: function(){
        console.log("Car is Starting...");
    }
}


document.getElementById("startBtn")
        .addEventListener("click", startMyCar)

function startMyCar(){
    car.start();
}


// console.log(car.modal);
// console.log(car.modal_number);
// console.log(car.color);

// console.log(car);



for(key in car){
    console.log(car[key]);
}




