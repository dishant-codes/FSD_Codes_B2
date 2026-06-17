import React from 'react'
import textContext from './store'

function TextViewer() {

    const {input, count} = React.useContext(textContext)
  
  return (
    <div>
        <h3> Input Value :{input}</h3>
        <h3> Count : {input.length}</h3>
        <h3> Words : {input.trim().split(' ').length}</h3>
    </div>
  )
}

export default TextViewer