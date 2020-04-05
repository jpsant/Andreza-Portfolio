import React from 'react';
import './styles.scss';

import CrossLogo from '../../assets/svg/cross-logo.svg';
import Dog from '../../assets/svg/dog.svg'
import Cat from '../../assets/svg/cat.svg'
import Paw from '../../assets/svg/paw.svg'
import Registration from '../../assets/svg/registration.svg'

export default function SkillsSection(props) {
  return (
    <div className="skills-container">
      <div className="skills-container__title">
        <h1 className="skills-container__title-h1">
          {props.language ? 'Especialidades' : 'Specialties'}<img src={CrossLogo} alt="Cross Logo" />
        </h1>
      </div>
      <div className="skills-container__skills">
        <div className="skills-container__skills__skill-1">
          <div className="skills-container__skills__skill-1-image">
            <img src={Dog} alt="Dog svg" />
          </div>
        </div>
        <div className="skills-container__skills__skill-2">
          <div className="skills-container__skills__skill-2-image">
            <img src={Cat} alt="Cat svg" />
          </div>
        </div>
        <div className="skills-container__skills__skill-3">
          <div className="skills-container__skills__skill-3-image">
            <img src={Paw} alt="Paw svg" />
          </div>
        </div>
        <div className="skills-container__skills__skill-4">
          <div className="skills-container__skills__skill-4-image">
            <img src={Registration} alt="Registration svg" />
          </div>
        </div>
      </div>
    </div>
  )
}