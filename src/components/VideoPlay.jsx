import React from 'react';

import '../styles/components/VideoPlay.css';
// import Loader from './Loader';

const VideoPlay = ({ data }) => {
  const { name, description, url_video } = data;

  function Press() {
    const video = document.getElementById(url_video); //video
    const play = document.getElementById(name); //button play
    if (video.paused) {
      video.play();
      // remove class and new add
      play.classList.remove('fa-play');
      play.classList.add('fa-pause');
    } else {
      video.pause();
      // remove class and new add
      play.classList.remove('fa-pause');
      play.classList.add('fa-play');
    }
  }

  return (
    <>
      <div className="VideoPlay">
        <div className="Video">
          <div className="Video-title">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="Video-play">
            <video src={url_video} width="400px" id={url_video} />
            <i className="fas fa-play" id={name} onClick={Press} />
            {/* <div className="barra" id="barra" onChange={State}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
