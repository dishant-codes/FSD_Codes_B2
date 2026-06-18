import React from 'react'

function Card({movie}) {
  return (
   <>
     <div className="card">
        <img src={movie.Poster} alt="" />
        <h2>{movie.Title}</h2>
        <p>{movie.year}</p>
     </div>  
   </>
  )
}

export default Card