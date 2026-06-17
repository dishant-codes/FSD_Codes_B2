import React, { useState } from 'react'
import "./SongPlayer.css"
import Song from "./Song"
import SongControl from './SongControl'
import songContext from '../context/songContext'

function SongPlayer() {

  const [song, setSong] = useState({})

  return (
    <div className='song-player'>
        <songContext.Provider value={{song: song, setSong: setSong}}>
            <Song />
            <SongControl />    
        </songContext.Provider>
    </div>
  )
}

export default SongPlayer