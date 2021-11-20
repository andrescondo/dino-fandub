import React from 'react';

import '../styles/components/References.css';
import photoReferences from '../img/tate.png';
import ReferencesBox from '../components/ReferencesBox';

const References = () => {
  return (
    <>
      <h4>Doblajes hechos</h4>
      <div className="References-container">
        <div className="References-box">
          {/* genially - proyecto */}
          <img src={photoReferences} alt="" />
          <p>Tate no yuusha</p>
        </div>
        <ReferencesBox/>
        <div className="References-box">
          {/* genially - proyecto */}
          <img src={photoReferences} alt="" />
          <p>Tate no yuusha</p>
        </div>
        <div className="References-box">
          {/* genially - proyecto */}
          <img src={photoReferences} alt="" />
          <p>Tate no yuusha</p>
        </div>
        <div className="References-box">
          {/* genially - proyecto */}
          <img src={photoReferences} alt="" />
          <p>Tate no yuusha</p>
        </div>
      </div>
    </>
  );
};

export default References;
