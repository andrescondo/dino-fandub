import React from 'react';

import '../styles/components/VideoPlay.css';
// import Loader from './Loader';

const VideoPlay = ({ data }) => {
  const { name, description, url_video } = data;

  function Press() {
    const video = document.getElementById(url_video);
    if (video.paused) {
      video.play();
      console.log(' play');
    }
  }

  // window.addEventListener('load', Start, false);

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
            {/* <button onClick={Play()}>Play</button> */}
            {/* <input type="button" id={name}></input> */}
            <i className="fas fa-play" id={name} onClick={Press} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
