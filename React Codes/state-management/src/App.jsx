import React, {useContext} from 'react';
import './App.css'
import {useState} from 'react';
import TextManager from './TextManager';
import TextViewer from './TextViewer';

import textContext from './store';


function App() {

  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <>
      <textContext.Provider value={{input: input, setInput: setInput, count: count, setCount: setCount}}>
          <TextViewer />
          <TextManager />
      </textContext.Provider>
      
    </>
  )
}




export default App
