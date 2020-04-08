import React, { useState } from 'react';
import './styles.scss';

import ContactDivider from '../../assets/svg/contact-divider.svg'
import Facebook from '../../assets/svg/facebook.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';

import Form from '../../components/ContactForm';

export default function ContactSection({ language, currentPage }) {
  return (
    <div className="contact-container">
      <div className="contact-container__title">
        <h1 className={currentPage === 3 ? "contact-container__title-h1 contact-container__title-h1-animateIn"
          : "contact-container__title-h1 contact-container__title-h1-animateOut"}>
          {language ? 'Entre em Contato !' : 'Contact me !'}
        </h1>
      </div>

      <div className="contact-container__info">
        <div className={currentPage === 3 ? "contact-container__info__social contact-container__info__social-animateIn"
          : "contact-container__info__social contact-container__info__social-animateOut"}>
          <h1>{language ? 'Siga-me nas redes sociais.' : 'Follow me on social media.'}</h1>
          <div className="contact-container__info__social-container">
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
          </div>
        </div>
        <img className="contact-container__info__divider" src={ContactDivider} alt="Contact section divider" />
        <Form page={currentPage} language={language} />
      </div>

      <div className="contact-container__info-mobile">

        <div className={currentPage === 3 ? "contact-container__info-mobile-social contact-container__info-mobile-social-animateIn"
        : "contact-container__info-mobile-social contact-container__info-mobile-social-animateOut"}>
          <h1>{language ? 'Siga-me nas redes sociais.' : 'Follow me on social media.'}</h1>
          <div className="contact-container__info-mobile-social-container">
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
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