import React, { Component } from 'react'
import Navbar from './components/Navbar'
import VideoGroup from './components/VideoGroup'
import { videoGroup } from './seed/videoSeed'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-spacer" />
        <Navbar />
        {videoGroup.map((videoGroup, idx) => {
          return <VideoGroup groupType={videoGroup.groupType}
            videos={videoGroup.videos} key={idx}
          />
        })}
      </div>
    )
  }
}

export default App;
