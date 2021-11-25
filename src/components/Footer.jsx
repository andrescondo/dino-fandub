import React from 'react';
import { Link } from 'react-router-dom'
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faYoutube, 
  faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <div className="Footer" id="footer">
      <div className="Footer-info">
        <h2> Datos de contacto</h2>
        <div className="footer-info__contact">
          <p><strong>Fandub</strong></p>
          <p><strong>Guayaquil - Ecuador </strong></p>
          <p><strong>Correo: </strong> dino@gmail.com</p>
        </div>
      </div>
      <div className="Footer-social">
        <h2>Redes Sociales</h2>
        <div className="social-media">
          <div className="social-media__link">
            <a 
              href="https://instagram.com" 
              target="_blank"
              title="Visita mi página">
              <FontAwesomeIcon
                size="4x"
                className="icons__menu"
                icon={faInstagram}
              />
            </a>
          </div>
          <div className="social-media__link">
            <a 
              href="https://www.youtube.com/channel/UClyuBJct-xmakhBAJEsC3NQ" 
              target="_blank"
              title="Visita mi canal">
              <FontAwesomeIcon
                size="4x"
                className="icons__menu"
                icon={faYoutube}
              />
            </a>
          </div>
          <div className="social-media__link">
            <a
                href="https://twitter.com" 
                target="_blank"
                title="Visita mi perfil">
              <FontAwesomeIcon
                size="4x"
                className="icons__menu"
                icon={faTwitter}
              />
            </a>
          </div>
          {/* <div className="social-media__link">
            <a>
              <FontAwesomeIcon
                size="4x"
                className="icons__menu"
                icon={faBars}
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
