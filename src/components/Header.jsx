import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/components/Header.css';

const Header = () => {
  const [icon, setIcon] = useState(false)

  const handleIcon = () => {
    setIcon(!icon)
  }

  return (
    <header className="Header">
      <i className="Header-icons">
        <FontAwesomeIcon
          size="2x"
          className="icons__menu"
          icon={faBars}
          onClick={handleIcon}
        />
      </i>
      <div className="Header-title">
        <h1>Dino Fandub</h1>
      </div>
      <div className={`Header-nav ${icon === true ? 'active' : ''}`}>
        <nav className="Header-nav__help">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          {/* <li>
            <a href="">Información</a>
          </li> */}
          <li>
            <a href="#footer">Contáctame</a>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
