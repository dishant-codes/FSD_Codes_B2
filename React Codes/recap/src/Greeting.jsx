import React from 'react'

function Greeting(props) {  
  return (
    <div>
        Hello, {props.name} <br/ >
        I'm {props.age} years old
    </div>
  )
}



export default Greeting