import React, { useState } from 'react';
import './styles.scss'

import VectorMobileUp from '../../assets/svg/vector-mobile-up.svg';
import VectorMobileDownRight from '../../assets/svg/vector-mobile-down-right.svg';
import VectorMobileDownLeft from '../../assets/svg/vector-mobile-down-left.svg';

export default function MobileMenu({ currentPage }) {
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
      <img style={{opacity: currentPage > 0 ? "1" : "0"}} src={VectorMobileDownRight} alt="Mobile Down Right Vector Shape" className="shape-down-right"/>
      <img style={{opacity: currentPage > 0 ? "1" : "0"}} src={VectorMobileDownLeft} alt="Mobile Down Vector Left Shape" className="shape-down-left"/>
    </>
  );
}