import React, { useState } from 'react'

function Counter() {
 const [count, setCount] = useState(0);

 let name = "Dishant";

//  console.log("component rendered");
    
  const handleDisplay = () =>{
    alert(count);
    console.log(name)
  }

  return (
    <div>
        <h2>{name}</h2>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>

        <button onClick={handleDisplay}>display</button>
        <button onClick={()=> name = "upGrad"}>update</button>
    </div>
  )
}

export default Counter