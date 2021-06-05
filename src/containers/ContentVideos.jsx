import React from 'react';

// import '../styles/components/ContentVideos.css'
import VideoPlay from '../components/VideoPlay';

import InicialtState from '../InicialState';

const ContentVideos = () => {
  const voiceover = InicialtState.voiceover;
  return (
    <>
      <h3>Mira algunos de mis trabajos</h3>
      {voiceover.map((voiceover) => {
        return <VideoPlay data={voiceover} key={voiceover.id} />;
      })}
    </>
  );
};

export default ContentVideos;
