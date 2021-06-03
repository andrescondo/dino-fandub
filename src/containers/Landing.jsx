import React from 'react';

import '../styles/components/landing.css'
import hero from '../img/boochi-header.png'

import ContentVideos from '../containers/ContentVideos';
import References from '../containers/References';

const Landing = () => {
  return(
    <div className="Landing">
      <section className="hero">
        <div className="hero-title">
          <h3>
            !!!PAN¡¡¡ <br />
            Ahora que tengo tú atención me presento
            realizó fanduh de Anime, VideoJuegos, etc.

            pdt: Aquí amamos a Boochi  
          </h3>

        </div>
        <figure>
          <img src={hero} alt="Foto Header"/>
        </figure>
      </section>
      <section className="ContentVideos">
        <ContentVideos/>
      </section>
      <section className="References">
        <References/>
      </section>
      <section className="price">

      </section>
    </div>
  )
}

export default Landing;