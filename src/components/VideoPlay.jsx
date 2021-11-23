import React from 'react';
import '../styles/components/VideoPlay.css';

const VideoPlay = ({ name, description, video, url_img }) => {
  // console.log(url_video)
  // function Press() {
  //   const video = document.getElementById(video); //video
  //   const play = document.getElementById(name); //button play
  //   if (video.paused) {
  //     video.play();
  //     // remove class and new add
  //     play.classList.remove('fa-play');
  //     play.classList.add('fa-pause');
  //   } else {
  //     video.pause();
  //     // remove class and new add
  //     play.classList.remove('fa-pause');
  //     play.classList.add('fa-play');
  //   }
  // }

  return (
    <>
      <div className="VideoPlay">
        <div className="Video">
          <div className="Video-play">
            <video src={video} controls></video>
            {/* {<script src='https://vjs.zencdn.net/7.6.5/video.js'></script>} */}
            {/* <i className="fas fa-play" id={name} onClick={Press} /> */}
          </div>
          <div className="Video-title">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
