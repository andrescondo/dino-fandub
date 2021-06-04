import React from 'react';

import '../styles/components/VideoPlay.css';
// import Loader from './Loader';

const VideoPlay = ({ data }) => {
  const { name, description, url_video } = data;
  console.log(name);
  return (
    <>
      <div className="VideoPlay">
        <div className="Video">
          <div className="Video-title">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="Video-play">
            <video src={url_video} width="400px" controls />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
