import React, { useState } from 'react';
import './styles.scss';

import ContactDivider from '../../assets/svg/contact-divider.svg'
import Facebook from '../../assets/svg/facebook.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Send from '../../assets/svg/send.svg'

export default function ContactSection(props) {
  const [email, setEmail] = useState('');
  const [subject, setsubject] = useState('');
  const [body, setBody] = useState('');

  const handleEmailForm = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  return (
    <div className="contact-container">
      <div className="contact-container__title">
        <h1>{props.language ? 'Entre em Contato!' : 'Contact me!'}</h1>
      </div>
      <div className="contact-container__info">
        <div className="contact-container__info__social">
          <h1>{props.language ? 'Siga-me nas redes sociais.' : 'Follow me on social media.'}</h1>
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
        <form onSubmit={handleEmailForm} className="contact-container__info__form">
          <input onChange={e => setEmail(e.target.value)} placeholder={props.language ? 'Seu email' : 'Your email'} type="email" />
          <input onChange={e => setsubject(e.target.value)} placeholder={props.language ? 'Assunto' : 'Subject'} type="text" />
          <textarea onChange={e => setBody(e.target.value)} placeholder={props.language ? 'Mensagem' : 'Message'} />
          <div className="contact-container__info__form-button-container">
            <button className="contact-container__info__form-button-container-send-button" type="submit">
              {props.language ? 'Enviar' : 'Send'} <img src={Send} alt="Send email icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}