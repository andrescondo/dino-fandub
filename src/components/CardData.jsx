import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/components/CardData.css'

const CardData = ({ data }) => {
  const { name, description, url_img, url_video } = data;
  return (
    <div className="CardDataContainer">

      <div className="CardData-box">
        
        <div className="CardData-title">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="CardData-button">
            <Link
              to={{
                pathname: `/video`,
                data: { name, description, url_img, url_video }
              }}>
              Ver Doblaje
            </Link>
          </div>
        </div>

        <div className="CardData-img">
          <img src={url_img} alt={`Foto de ${name}`} />

        </div>
      </div>
    </div>
  )
}

export default CardData;