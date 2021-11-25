import React from 'react';

import '../styles/components/References.css';
import photoReferences from '../img/tate.png';
import ReferencesBox from '../components/ReferencesBox';

const References = () => {
  return (
    <>
      <h4>Doblajes hechos</h4>
      <div className="References-container">

        <ReferencesBox/> 

      </div>
    </>
  );
};

export default References;
