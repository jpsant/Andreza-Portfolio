import React, { useState } from 'react';
import './styles.scss';
import Send from '../../assets/svg/send.svg';

import Languages from '../../multiLanguages/languages';

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
      <input onChange={e => setEmail(e.target.value)} placeholder={Languages[language].contactForm.email} type="email" />
      <input onChange={e => setsubject(e.target.value)} placeholder={Languages[language].contactForm.subject} type="text" />
      <textarea onChange={e => setBody(e.target.value)} placeholder={Languages[language].contactForm.message} />
      <div className="form-button-container">
        <button className="form-button-container-send-button" type="submit">
          {Languages[language].contactForm.send} <img src={Send} alt="Send email icon" />
        </button>
      </div>
    </form>
  );
}