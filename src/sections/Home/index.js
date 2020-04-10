import React from 'react';
import './styles.scss';

import HomeShape from '../../assets/svg/home-shape-2.svg'
import Paws from '../../assets/svg/paws.svg';

import LogoMobile from '../../assets/svg/logo-mobile.svg';

export default function HomeSection({ language, currentPage }) {
  return (
    <>
      <img src={LogoMobile} alt="Mobile Logo" className="mobile-logo mobile-logo-animateIn" />
      <img src={HomeShape} alt="Home Vector Shape" className="home-shape" />
      <img src={Paws} alt="Little dog paws" className="home-paws" />
      <div className="home-container">
        <div className="home-container__text">
          <h1 className={currentPage === 0 ? "home-container__text-title home-container__text-title-animateIn"
            : "home-container__text-title home-container__text-title-animateOut"}>
            Andreza
          </h1>
          <h1 className={currentPage === 0 ? "home-container__text-subtitle home-container__text-subtitle-animateIn"
            : "home-container__text-subtitle home-container__text-subtitle-animateOut"}>
            Fernandes
            </h1>
          <h2 className={currentPage === 0 ? "home-container__text-h2 home-container__text-h2-animateIn"
            : "home-container__text-h2 home-container__text-h2-animateOut"}>
            {language ? 'Médica Veterinária' : 'Veterinarian'}
          </h2>
        </div>
      </div>
    </>
  )
}