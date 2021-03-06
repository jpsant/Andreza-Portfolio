import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';

import CrossLogo from '../../assets/svg/cross-logo.svg';
import Dog from '../../assets/svg/dog.svg';
import Cat from '../../assets/svg/cat.svg';
import Paw from '../../assets/svg/paw.svg';
import Registration from '../../assets/svg/registration.svg';

import Languages from '../../multiLanguages/languages';

export default function SkillsSection({ language, currentPage, section }) {

  const skill1 = (
    <div>
      <div className={currentPage === 2 ? "skills-container__skills-mobile__skill-1 skill-1-animateIn"
        : "skills-container__skills-mobile__skill-1 skill-1-animateOut"}>
        <div className="skills-container__skills-mobile__skill-1-image">
          <img src={Dog} alt="Dog svg" />
        </div>
      </div>
    </div>
  );

  const skill2 = (
    <div>
      <div className={currentPage === 2 ? "skills-container__skills-mobile__skill-2 skill-2-animateIn"
        : "skills-container__skills-mobile__skill-2 skill-2-animateOut"}>
        <div className="skills-container__skills-mobile__skill-2-image">
          <img src={Cat} alt="Cat svg" />
        </div>
      </div>
    </div>
  );

  const skill3 = (
    <div>
      <div className={currentPage === 2 ? "skills-container__skills-mobile__skill-3 skill-3-animateIn"
        : "skills-container__skills-mobile__skill-3 skill-3-animateOut"}>
        <div className="skills-container__skills-mobile__skill-3-image">
          <img src={Paw} alt="Paw svg" />
        </div>
      </div>
    </div>
  );

  const skill4 = (
    <div>
      <div className={currentPage === 2 ? "skills-container__skills-mobile__skill-4 skill-4-animateIn"
        : "skills-container__skills-mobile__skill-4 skill-4-animateOut"}>
        <div className="skills-container__skills-mobile__skill-4-image">
          <img src={Registration} alt="Registration svg" />
        </div>
      </div>
    </div>
  );

  let skills = [skill1, skill2, skill3, skill4];

  return (
    <div className="skills-container">
      <div className="skills-container__title">
        <h1 className={currentPage === 2 ? "skills-container__title-h1 skills-container__title-h1-animateIn"
          : "skills-container__title-h1 skills-container__title-h1-animateOut"}>
          {Languages[language].skillsSection.title}
          <img src={CrossLogo} alt="Cross Logo" />
        </h1>
      </div>
      <div className="skills-container__skills">
        <div className={currentPage === 2 ? "skills-container__skills__skill-1 skill-1-animateIn"
          : "skills-container__skills__skill-1 skill-1-animateOut"}>
          <div className="skills-container__skills__skill-1-image">
            <img src={Dog} alt="Dog svg" />
          </div>
        </div>
        <div className={currentPage === 2 ? "skills-container__skills__skill-2 skill-2-animateIn"
          : "skills-container__skills__skill-2 skill-2-animateOut"}>
          <div className="skills-container__skills__skill-2-image">
            <img src={Cat} alt="Cat svg" />
          </div>
        </div>
        <div className={currentPage === 2 ? "skills-container__skills__skill-3 skill-3-animateIn"
          : "skills-container__skills__skill-3 skill-3-animateOut"}>
          <div className="skills-container__skills__skill-3-image">
            <img src={Paw} alt="Paw svg" />
          </div>
        </div>
        <div className={currentPage === 2 ? "skills-container__skills__skill-4 skill-4-animateIn"
          : "skills-container__skills__skill-4 skill-4-animateOut"}>
          <div className="skills-container__skills__skill-4-image">
            <img src={Registration} alt="Registration svg" />
          </div>
        </div>
      </div>

      <div className="skills-container__skills-mobile">
        <SwitchTransition>
          <CSSTransition
            key={section}
            classNames='news'
            timeout={100}>
            {skills[section]}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  )
}