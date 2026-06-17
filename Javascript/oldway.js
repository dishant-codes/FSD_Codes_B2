// const xhr = new XMLHttpRequest();

// xhr.open("GET","https://dummyjson.com/products");


// xhr.onload = function(){
//     if(xhr.status === "200"){
//         console.log("Success");
//     }
// }
async function getProducts(){

    let data;

    try{
        const response = await fetch("https://dummyjson.com/products")
        data = await response.json();
        
    }
    catch(err){
        console.error(err);
    }


    console.log(data);
    
   
    


}


getProducts();

