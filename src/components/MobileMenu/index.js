import React, { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import './styles.scss'

import VectorMobileUp from '../../assets/svg/vector-mobile-up.svg';
import VectorMobileDownRight from '../../assets/svg/vector-mobile-down-right.svg';
import VectorMobileDownLeft from '../../assets/svg/vector-mobile-down-left.svg';

import ArrowButtonLeft from '../../assets/svg/mobile-arrow-left.svg';
import ArrowButtonRight from '../../assets/svg/mobile-arrow-right.svg';

export default function MobileMenu({ currentPage, aboutHandler, skillsHandler, languageChanger, language, section }) {
  const [mobileMenu, handleMobileMenu] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <img src={VectorMobileUp}
          alt="Mobile Up Vector Shape"
          className="mobile-menu-shape-up"
          style={{ width: "130px" }} />
        <button onClick={() => handleMobileMenu(!mobileMenu)} className={mobileMenu ? "mobile-menu-button hamburger hamburger--spin is-active"
          : "mobile-menu-button hamburger hamburger--spin"}>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <div style={{ opacity: mobileMenu ? '1' : '0', visibility: mobileMenu ? 'visible' : 'hidden' }}
        className="mobile-menu-container">
        <LanguageSwitcher language={languageChanger} />
        <h1 onClick={() => { handleMobileMenu(false); section(0) }}
          style={{ opacity: currentPage === 0 ? '1' : '.5', color: currentPage === 3 ? '#2BAA9B' : '#fff' }}
          className="mobile-menu-container__h1">
          {language ? 'Início' : 'Home'}
          <hr style={{borderColor: currentPage === 3 ? '#2BAA9B' : '#fff'}} />
        </h1>
        <h1 onClick={() => { handleMobileMenu(false); section(1) }} style={{ opacity: currentPage === 1 ? '1' : '.5', color: currentPage === 3 ? '#2BAA9B' : 'white'  }} className="mobile-menu-container__h1">
          {language ? 'Sobre mim' : 'About me'}
          <hr style={{borderColor: currentPage === 3 ? '#2BAA9B' : '#fff'}} />
        </h1>
        <h1 onClick={() => { handleMobileMenu(false); section(2) }} style={{ opacity: currentPage === 2 ? '1' : '.5', color: currentPage === 3 ? '#2BAA9B' : 'white'  }} className="mobile-menu-container__h1">
          {language ? 'Especialidades' : 'Specialties'}
          <hr style={{borderColor: currentPage === 3 ? '#2BAA9B' : '#fff'}} />
        </h1>
        <h1 onClick={() => { handleMobileMenu(false); section(3) }} style={{ opacity: currentPage === 3 ? '1' : '.5', color: currentPage === 3 ? '#2BAA9B' : 'white'  }} className="mobile-menu-container__h1">
          {language ? 'Contato' : 'Contact'}
          <hr style={{borderColor: currentPage === 3 ? '#2BAA9B' : '#fff'}} />
        </h1>
      </div>

      <button onClick={currentPage === 1 ? () => aboutHandler(-1)
        : currentPage === 2 ? () => skillsHandler(-1) : null}
        className="mobile-menu-button-left"
        style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }}>
        <img src={ArrowButtonLeft} alt="Mobile Arrow Left" />
      </button>

      <button onClick={currentPage === 1 ? () => aboutHandler(1)
        : currentPage === 2 ? () => skillsHandler(1) : null}
        className="mobile-menu-button-right"
        style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }}>
        <img src={ArrowButtonRight} alt="Mobile Arrow Right" />
      </button>

      <img style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }} src={VectorMobileDownRight} alt="Mobile Down Right Vector Shape" className="shape-down-right" />
      <img style={{ opacity: currentPage === 0 ? "0" : currentPage === 3 ? "0" : "1" }} src={VectorMobileDownLeft} alt="Mobile Down Vector Left Shape" className="shape-down-left" />
    </>
  );
}