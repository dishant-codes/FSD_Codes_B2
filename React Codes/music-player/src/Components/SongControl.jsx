import React from 'react'
import data from "../db/data.js"
import "./SongControl.css"
import songContext from '../context/songContext.js'

function SongControl() {

  const {setSong} = React.useContext(songContext);

  return (
    <div className='song-control'>
        {data.map((song)=>{
            return <button onClick={()=>setSong(song)} className='song-btn'>{song.title}</button>
        })}
    </div>
  )
}

export default SongControl