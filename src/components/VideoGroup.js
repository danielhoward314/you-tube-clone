import React from 'react'
import Video from './Video'
import './VideoGroup.css'

const VideoGroup = (props) => {
  return (
    <div>
      <h1>{props.groupType}</h1>
      <div className="video-group-container">
        {props.videos.map((video, idx) => {
          return <Video
            key={idx}
            title={video.title}
            author={video.author}
            imageUrl={video.imageUrl}
            views={video.views}
            uploadDate={video.uploadDate}
          />
        })}
      </div>
    </div>
  )

}

export default VideoGroup;
