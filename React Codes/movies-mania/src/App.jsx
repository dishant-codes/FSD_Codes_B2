import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Card from './Card';

function App() {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("")
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounceQuery(query)
    }, 500);

    return () => clearTimeout(timer)

  },[query])


  useEffect(()=>{

    if(!debounceQuery){
      setMovies([]);
      return;
    }

     const fetchMovies = async()=>{
        let url = "http://www.omdbapi.com/?apikey="
        let key = "f75c485a"
        const result = await axios.get("http://www.omdbapi.com/?apikey="+key+"&s="+debounceQuery)
        if(result.data.Response == "True"){
           setMovies(result.data.Search);
        }
        // console.log(response);
      }

      fetchMovies();

  },[debounceQuery])

 
  return (
    <>
        <input id='myInput' type='text' onChange={(event)=> setQuery(event.target.value) } placeholder='enter movie name'/>
       
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
