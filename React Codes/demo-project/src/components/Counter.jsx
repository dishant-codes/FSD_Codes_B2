import React from 'react'

function Counter({counter, setCounter}) {
    

  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=> setCounter(++counter)}>+</button>
        <button onClick={()=> setCounter(--counter)}>-</button>
    </div>
  )
}

export default Counter