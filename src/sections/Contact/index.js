import React from 'react';
import './styles.scss';

import ContactDivider from '../../assets/svg/contact-divider.svg'
import Facebook from '../../assets/svg/facebook.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';

import Form from '../../components/ContactForm';

import Languages from '../../multiLanguages/languages';

export default function ContactSection({ language, currentPage }) {
  return (
    <div className="contact-container">
      <div className="contact-container__title">
        <h1 className={currentPage === 3 ? "contact-container__title-h1 contact-container__title-h1-animateIn"
          : "contact-container__title-h1 contact-container__title-h1-animateOut"}>
          {Languages[language].contactSection.title}
        </h1>
      </div>

      <div className="contact-container__info">
        <div className={currentPage === 3 ? "contact-container__info__social contact-container__info__social-animateIn"
          : "contact-container__info__social contact-container__info__social-animateOut"}>
          <h1>{Languages[language].contactSection.social}</h1>
          <div className="contact-container__info__social-container">
            <a href={null}>
              <img src={Facebook} alt="Facebook logo" />
            </a>
            <a href={null}>
              <img src={Instagram} alt="Instagram logo" />
            </a>
            <a href={null}>
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
            <a href={null}>
              <img src={Twitter} alt="Twitter logo" />
            </a>
          </div>
        </div>
        <img className="contact-container__info__divider" src={ContactDivider} alt="Contact section divider" />
        <Form page={currentPage} language={language} />
      </div>

      <div className="contact-container__info-mobile">

        <div className={currentPage === 3 ? "contact-container__info-mobile-social contact-container__info-mobile-social-animateIn"
        : "contact-container__info-mobile-social contact-container__info-mobile-social-animateOut"}>
          <h1>{Languages[language].contactSection.social}</h1>
          <div className="contact-container__info-mobile-social-container">
            <a href={null}>
              <img src={Facebook} alt="Facebook logo" />
            </a>
            <a href={null}>
              <img src={Instagram} alt="Instagram logo" />
            </a>
            <a href={null}>
              <img src={Linkedin} alt="Linkedin logo" />
            </a>
            <a href={null}>
              <img src={Twitter} alt="Twitter logo" />
            </a>
          </div>
        </div>

        <div className={currentPage === 3 ? "contact-container__info-mobile-form contact-container__info-mobile-form-animateIn"
        : "contact-container__info-mobile-form contact-container__info-mobile-form-animateOut"}>
          <Form page={currentPage} language={language} />
        </div>
      </div>
    </div>
  )
}