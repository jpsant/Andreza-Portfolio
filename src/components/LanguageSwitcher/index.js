import React from 'react';

import './styles.scss';

import BrazilFlag from '../../assets/svg/brasil-flag.svg'
import EuaFlag from '../../assets/svg/eua-flag.svg'

export default function LanguageSwitcher({ language }) {
  return (
    <label className="switch">
      <img alt="Language Changer Brazil Flag" className="brazilFlag" src={BrazilFlag}></img>
      <img alt="Language Changer EUA Flag" className="euaFlag" src={EuaFlag}></img>
      <input type="checkbox" onChange={language} className="input"></input>
      <span className="slider round"></span>
    </label>
  )
}