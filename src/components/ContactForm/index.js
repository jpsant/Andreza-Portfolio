import React, { useState } from 'react';
import './styles.scss';
import Send from '../../assets/svg/send.svg'

export default function ContactForm({ language, page }) {
  const [email, setEmail] = useState('');
  const [subject, setsubject] = useState('');
  const [body, setBody] = useState('');

  const handleEmailForm = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  return (
    <form onSubmit={handleEmailForm}
      className={page === 3 ? "form form-animateIn" : "form form-animateOut"}>
      <input onChange={e => setEmail(e.target.value)} placeholder={language ? 'Seu email' : 'Your email'} type="email" />
      <input onChange={e => setsubject(e.target.value)} placeholder={language ? 'Assunto' : 'Subject'} type="text" />
      <textarea onChange={e => setBody(e.target.value)} placeholder={language ? 'Mensagem' : 'Message'} />
      <div className="form-button-container">
        <button className="form-button-container-send-button" type="submit">
          {language ? 'Enviar' : 'Send'} <img src={Send} alt="Send email icon" />
        </button>
      </div>
    </form>
  );
}