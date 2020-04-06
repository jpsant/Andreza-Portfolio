import React from 'react';
import './styles.scss';

import HomeShape from '../../assets/svg/home-shape-2.svg'
import Paws from '../../assets/svg/paws.svg';

export default function HomeSection({ language, currentPage }) {
  return (
    <>
      <img src={HomeShape} alt="Home Vector Shape" className="home-shape" />
      <img src={Paws} alt="Little dog paws" className="home-paws" />
      <div className="home-container">
        <div className="home-container__text">
          <h1 className={ currentPage === 0 ? "home-container__text-h1-animated" : "home-container__text-h1" }>Andreza</h1>
          {/* <h1 className="home-container__text-h1">Fernandes</h1> */}
          {/* <h2 className="home-container__text-h2">{language ? 'Médica Veterinária' : 'Veterinarian'}</h2> */}
        </div>
      </div>
    </>
  )
}