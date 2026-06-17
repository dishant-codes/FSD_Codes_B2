import React, { useContext } from 'react'
import textContext from './store';


function TextManager() {

    const {setInput, setCounter, input} = useContext(textContext);
  return (
   <>
   
    <input type='text' onChange={(event)=> setInput(event.target.value)} />
 
   {/*  This is React Session  .split(" ") => ["This","is","React","Session"]  */}

     <button onClick={()=> setInput(input.toUpperCase())}>UPPER</button>

   </>
  )
}

export default TextManager