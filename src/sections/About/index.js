import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.scss';

import Divider from '../../assets/svg/divider.svg';
import MobileDivider from '../../assets/svg/mobile-divider.svg';
import CatPhoto from '../../assets/png/cat-photo.png';
import DogPhoto from '../../assets/png/dog-photo.png';

export default function AboutSection({ currentPage, section }) {

  const texts1 = (
    <div>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateIn"
        : "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateIn"
        : "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateIn"
        : "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
    </div>
  );

  const texts2 = (
    <div>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateIn"
        : "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateIn"
        : "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateIn"
        : "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
    </div>
  );

  const texts3 = (
    <div>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateIn"
        : "about-container__mobile-texts-h2-1-mobile about-container__mobile-texts-h2-1-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateIn"
        : "about-container__mobile-texts-h2-2-mobile about-container__mobile-texts-h2-2-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      <h2 className={currentPage === 1 ? "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateIn"
        : "about-container__mobile-texts-h2-3-mobile about-container__mobile-texts-h2-3-mobile-animateOut"}>
        UMMM Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
    </div>
  );

  return (
    <>
      <div className="about-container">
        <div className="about-container__texts">
          <img className="about-section-divider" src={Divider} alt="Section Divider" />
          <h1
            className={currentPage === 1 ? "about-container__texts-h1 about-container__texts-h1-animateIn"
              : "about-container__texts-h1 about-container__texts-h1-animateOut"}>
            Resumé
            <img className="about-section-mobile-divider" src={MobileDivider} alt="Section Mobile Divider" />
          </h1>
          <h2 className={currentPage === 1 ? "about-container__texts-h2-1 about-container__texts-h2-1-animateIn"
            : "about-container__texts-h2-1 about-container__texts-h2-1-animateOut"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
          <h2 className={currentPage === 1 ? "about-container__texts-h2-2 about-container__texts-h2-2-animateIn"
            : "about-container__texts-h2-2 about-container__texts-h2-2-animateOut"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
          <h2 className={currentPage === 1 ? "about-container__texts-h2-3 about-container__texts-h2-3-animateIn "
            : "about-container__texts-h2-3 about-container__texts-h2-3-animateOut"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        </div>
        <div className="about-container__images">
          <img className={currentPage === 1 ? "about-container__images-dog dog-animateIn" : "about-container__images-dog dog-animateOut"} src={DogPhoto} alt="Dog logo" />
          <img className={currentPage === 1 ? "about-container__images-cat cat-animateIn" : "about-container__images-cat cat-animateOut"} src={CatPhoto} alt="Cat logo" />
        </div>
        <div className="about-container__mobile-texts">
          <SwitchTransition>
            <CSSTransition
              key={section}
              classNames='news'
              timeout={100}
            >
              {section === 0 ? texts1
                : section === 1 ? texts2
                  : section === 2 ? texts3 : null}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </>
  )
}