import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const MusicPlayer = () => {
  return (
    <div>
      <div className='music-player'>
        <ReactAudioPlayer
        src='path'
        autoPlay
        controls
        />
      </div>
    </div>
  )
}

export default MusicPlayer
