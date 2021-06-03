import React from 'react';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from 'cloudinary-react';

import '../styles/components/VideoPlay.css';
import Loader from './Loader';

const VideoPlay = () => {
  return (
    <>
      <div className="VideoPlay">
        <div className="Video">
          <div className="Video-title">
            <h4>
              Demo de voz Touya Mochizuki ★Isekai wa Smartphone to Tomo ni★
            </h4>
            <p>
              Apoyen siempre al contenido original!!!! Muchas gracias a esta
              linda personita por prestarme su voz :3. Aquí les dejo su canal,
              para que puedan ver los demás fandubs geniales que hace. Que lo
              disfruten!!! UwU
            </p>
          </div>
          <div className="Video-play">
            <iframe
              onLoad={Loader}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7JaVzkIENWU"
              title="Demo de voz Touya Mochizuki"
              frameBorder="0"
              allow="accelerometer; autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlay;
