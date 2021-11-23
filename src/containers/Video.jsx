import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VideoPlay from '../components/VideoPlay'
import '../styles/components/Video.css'

const Video = () => {
  const [dataVideo, setDataVideo] = useState({})
  const location = useLocation()

  useEffect(() => {
    const info = location?.data;
    // console.log(info)
    setDataVideo(info)
    // const {name, description, url_img, url_video} = info;
  }, [])

  return (
    <div className="VideoFanduh">
      <div className="Video-container">
        <div className="Video-box">
          <VideoPlay
            name={dataVideo?.name}
            description={dataVideo?.description}
            url_img={dataVideo?.url_img}
            video={dataVideo?.url_video}
          />

        </div>
        <div className="Video-icon">
          <h3>
            ICONO
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Video;