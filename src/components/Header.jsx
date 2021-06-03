import React from 'react';

import '../styles/components/Header.css'

const Header = () => {
  return(
    <header className="Header">
      <div className="Header-title">
        <h2>Dino Fandub</h2>
      </div>
      <div className="Header-nav">
        <nav className="Header-nav__help">
          <li>
            <a href="">Información</a>
          </li>
          <li>
            <a href="#">Contactanos</a>
          </li>
        </nav>
      
      </div>
    </header>
  )
} 

export default Header;