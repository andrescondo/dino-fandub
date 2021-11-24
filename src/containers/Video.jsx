import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VideoPlay from '../components/VideoPlay'
import BoochiPlay from '../img/boochi-oso.png'
import BoochiPause from '../img/boochi-puchero-rm.png'
import '../styles/components/Video.css'

const Video = () => {
  const [dataVideo, setDataVideo] = useState({})
  const location = useLocation()
  const [buttonPlay, setButtonPlay] = useState(0)
  const [ mediaMobile, setMediaMobile] = useState(false)
  // const [] = useState({})

  useEffect(() => {
    const info = location?.data;
    setDataVideo(info)
    if (info) {
      localStorage.setItem('nameVideo', info?.name)
      localStorage.setItem('urlVideo', info?.url_video)
      localStorage.setItem('descriptionVideo', info?.description)
    }
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
            setButtonPlay={setButtonPlay}
            mediaMobile={mediaMobile}
            setMediaMobile={setMediaMobile}
          />

        </div>
        <div className={`Video-icon ${mediaMobile ? 'active' : 'active'}`}>
          <div className="Video-icon__play">
            {
              buttonPlay === true
                ? (
                  <div>
                    <img src={BoochiPlay} alt="Boochi en play" />
                    <p>¡Disfrutalo!</p>

                  </div>
                )
                : false
            }
            {
              buttonPlay === false 
              ? (
                <div>
                  <p>¿Porque le pones pausa?</p>
                  <img src={BoochiPause} alt="Boochi en play" />
                </div>
              ) : false
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;