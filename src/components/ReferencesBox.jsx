import React from 'react';

import photoReferences from '../img/tate.png';
const sao = 'https://res.cloudinary.com/andreescondo/image/upload/v1637374960/dino/fanduh2_wk2irh.png'
const smart = 'https://res.cloudinary.com/andreescondo/image/upload/v1637810407/dino/R_b0kej1.jpg'
const phantom = 'https://res.cloudinary.com/andreescondo/image/upload/v1637810407/dino/musaigen-no-phantom-world_mfn8vs.jpg'
const acchi = 'https://res.cloudinary.com/andreescondo/image/upload/v1637810789/dino/acchi-kocchi_mholkj.png'

const references = [
  {
    photo: photoReferences,
    name: "Tate no yuusha"
  },
  {
    photo: smart,
    name: "Isekai wa Smartphone to Tomo ni"
  },
  {
    photo: phantom,
    name: "Musaigen no phantom world"
  },
  {
    photo: sao,
    name: "Sword Art Online"
  },
  {
    photo: acchi,
    name: "Acchi Kocchi"
  },
]

const ReferencesBox = () => {


  return (
    <>
      {
        references.map((data, key) => {
          return (
            <div className="References-box" key={key}>
              <img src={data.photo} alt="" />
              <p>{data.name}</p>
            </div>
          )
        })
      }
    </>
  )
};

export default ReferencesBox;
