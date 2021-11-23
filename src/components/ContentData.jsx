import React from 'react'

import InicialtState from '../InicialState';
import CardData from './CardData';


const ContentData = () => {
  const card = InicialtState.card;

  return(
    <>
      <h3>Mira algunos de mis trabajos</h3>
      {
        card.map((data, key) => {
          console.log(data)
          return(
            <CardData key={key} data={data}/>
          )
        })
      }
    </>
  )
}

export default ContentData;