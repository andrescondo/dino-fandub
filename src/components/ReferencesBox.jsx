import React from 'react';

// import '../styles/components/References.css';

// import photoReferences from '../img/tate.png'
import photoReferences from '../img/tate.png';


const references = [
  {
    photo : photoReferences,
    name : "Tate no yuusha"
  }
]

const ReferencesBox = () => {
  

  return (
    <div className="References-box">
       <img src={references.photo} alt="" />
        <p>{references.name}</p>
    </div>
  )
};

export default ReferencesBox;
