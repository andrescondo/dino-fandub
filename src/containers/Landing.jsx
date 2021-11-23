import React from 'react';

import '../styles/components/landing.css';
import hero from '../img/boochi-header.png';

import ContentVideos from '../containers/ContentVideos';
import References from '../containers/References';
import ContentData from '../components/ContentData';

const Landing = () => {
  return (
    <div className="Landing">
      <section className="hero">
        <div className="hero-title">
          <h3>
            ¡¡¡PAN!!! 🍞🍞🍞 <br />
            Ahora que tengo tú atención me presento realizó <strong>fanduh</strong> de Anime,
            VideoJuegos, y más.
            <br />
            <br />
            pdt: Aquí amamos a Boochi
          </h3>
        </div>
        <figure>
          <img src={hero} alt="Foto Header" />
        </figure>
      </section>
      {/* <section className="ContentVideos">
        <ContentVideos />
      </section> */}
      <section className="ContentData">
        <ContentData/>
      </section>
      <section className="References">
        <References />
      </section>
      <section className="price"></section>
    </div>
  );
};

export default Landing;
