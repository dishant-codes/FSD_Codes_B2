import { useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './Card';

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
 

  const fetchMovies = async()=>{
        let url = "http://www.omdbapi.com/?apikey="
        let key = "f75c485a"
        const result = await axios.get("http://www.omdbapi.com/?apikey="+key+"&s="+query)
        if(result.data.Response == "True"){
           setMovies(result.data.Search);
        }
        // console.log(response);
  }

  return (
    <>
        <input id='myInput' type='text' onChange={(event)=> setQuery(event.target.value) } placeholder='enter movie name'/>
        <button onClick={fetchMovies}>Fetch</button>
        <div className="container">
              {movies ? 
                movies.map((movie)=>{
                    return <Card movie={movie}/>
                }) : <h2>No Result</h2>
              }
        </div>  
    </>
  )
}

export default App
