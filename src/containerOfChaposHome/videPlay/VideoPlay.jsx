import React from 'react'
import './VideoPlay.scss'
import ReactPlayer from 'react-player'
import { Player, ControlBar, PlayToggle, ReplayControl } from 'video-react'

const VideoPlay = () => {
      
       
       return (
              <Player
      autoPlay
      muted='true'
      fluid='false'
      height='70%'
      poster="/assets/poster.png"
      startTime={20}
      src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
    >
      <ControlBar autoHide={true}>
        <ReplayControl seconds={3} order={2.1} />
        <ReplayControl seconds={10} order={2.2} />
        <ReplayControl seconds={30} order={2.3} />
      </ControlBar>
    </Player>
       )
}

export default VideoPlay
