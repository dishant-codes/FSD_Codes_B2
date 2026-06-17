import React from 'react'
import "./Song.css"
import songContext from '../context/songContext'

function Song() {
    const {song} = React.useContext(songContext)
  return (
    <div className='song'>
        <h1 className='song-title'>{song.title}</h1>
        <p className='song-bio'>{song.artist}</p>
    </div>
  )
}

export default Song