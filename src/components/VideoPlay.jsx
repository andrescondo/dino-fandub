import React, { useEffect, useState } from 'react';
import '../styles/components/VideoPlay.css';

const VideoPlay = ({ 
    name, 
    description, 
    video, 
    setButtonPlay,
    mediaMobile,
    setMediaMobile 
  }) => {
  const [data, setData] = useState({})
  const videoContainer = document.getElementById('video'); //video
  const play = document.getElementById('playButton'); //button play
  const nameVideo = localStorage.getItem('nameVideo')
  const urlVideo = localStorage.getItem('urlVideo')
  const descriptionVideo = localStorage.getItem('descriptionVideo')

  // useEffect(() => {
  // },[])

  // console.log(url_video)
  function Press() {
    const media = window.matchMedia('screen and (max-width: 850px)')
    if(media.matches){
      setMediaMobile(!mediaMobile)
    }
    
    if (videoContainer.paused) {
      videoContainer.play();
      setButtonPlay(true)
      // remove class and new add
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');
    } else {
      videoContainer.pause();
      setButtonPlay(false)
      // remove class and new add
      play.classList.remove('fa-pause');
      play.classList.add('fa-play');
    }
  }

  return (
    <>
      <div className="VideoPlay">
        <div className="Video-play">
          <video src={video ? video : urlVideo} id="video"></video>
          {/* {<script src='https://vjs.zencdn.net/7.6.5/video.js'></script>} */}
          <div className="Video-play__button">
            <i className="fas fa-play" id="playButton" onClick={Press} />

          </div>
        </div>
        <div className="Video-title">
          <h4>{name ? name : nameVideo}</h4>
          <p>{description ? description : descriptionVideo}</p>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
