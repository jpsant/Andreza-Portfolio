import React, { useState } from 'react';
import './styles.scss'

import VectorMobileUp from '../../assets/svg/vector-mobile-up.svg';
import VectorMobileDownRight from '../../assets/svg/vector-mobile-down-right.svg';
import VectorMobileDownLeft from '../../assets/svg/vector-mobile-down-left.svg';

export default function MobileMenu({ currentPage, aboutHandler, skillsHandler }) {
  const [mobileMenu, handleMobileMenu] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <img src={VectorMobileUp}
          alt="Mobile Up Vector Shape"
          className={"mobile-menu-shape-up"}
          style={{ width: mobileMenu ? "550px" : "180px" }} />
        <button onClick={() => handleMobileMenu(!mobileMenu)} className="mobile-menu-button">press me!</button>
      </div>

      <button onClick={ currentPage === 1 ? () =>  aboutHandler(-1) 
      : currentPage === 2 ? () => skillsHandler(-1) : null} 
      className="mobile-menu-button-left">left</button>

      <button onClick={ currentPage === 1 ? () =>  aboutHandler(1) 
      : currentPage === 2 ? () => skillsHandler(1) : null}
      className="mobile-menu-button-right">right</button>

      <img style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }} src={VectorMobileDownRight} alt="Mobile Down Right Vector Shape" className="shape-down-right" />
      <img style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }} src={VectorMobileDownLeft} alt="Mobile Down Vector Left Shape" className="shape-down-left" />
    </>
  );
}