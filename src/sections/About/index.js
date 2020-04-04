import React from 'react';
import './styles.scss'

import Divider from '../../assets/svg/divider.svg';
import CatPhoto from '../../assets/png/cat-photo.png';
import DogPhoto from '../../assets/png/dog-photo.png';

export default function AboutSection() {
  return (
    <div className="about-container">
      <img className="about-section-divider" src={Divider} alt="Section Divider" />
      <div className="about-container__texts">
        <h1 className="about-container__texts-h1">Resumé</h1>
        <h2 className="about-container__texts-h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <h2 className="about-container__texts-h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <h2 className="about-container__texts-h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>
      <div className="about-container__images">
        <img className="about-container__images-dog" src={DogPhoto} alt="Dog logo"/>
        <img className="about-container__images-cat" src={CatPhoto} alt="Cat logo"/>
      </div>
    </div>
  )
}