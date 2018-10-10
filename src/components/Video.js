import React from 'react'
import './VideoGroup.css'

const Video = (props) => {
  return (
    <div className="video-container">
      <img className="vid-prev-img" src='pexels-photo-1462052.jpeg' alt='Parrot' />
      <div className="video-text-container">
        <h4>{props.title}</h4>
        <p>{props.author}</p>
        <p>{props.views} • {props.uploadDate}</p>
      </div>
    </div>
  )
}

export default Video;
