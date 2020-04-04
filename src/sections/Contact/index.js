import React from 'react';
import './styles.scss';

import ContactDivider from '../../assets/svg/contact-divider.svg'
import Facebook from '../../assets/svg/facebook.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Send from '../../assets/svg/send.svg'

export default function ContactSection() {
  return (
    <div className="contact-container">
      <div className="contact-container__title">
        <h1>Gostou do perfil?</h1>
        <h2>Entre em contato!</h2>
      </div>
      <div className="contact-container__info">
        <div className="contact-container__info__social">
          <h1>Siga-me nas redes sociais.</h1>
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
        <form className="contact-container__info__form">
          <input placeholder="Seu nome" type="text" />
          <input placeholder="Seu email" type="email" />
          <textarea placeholder="Mensagem"></textarea>
          <div className="contact-container__info__form-button-container">
            <button className="contact-container__info__form-button-container-send-button" type="submit">
              Enviar <img src={Send} alt="Send email icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}