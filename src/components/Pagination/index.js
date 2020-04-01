import React from 'react';
import logo from '../../assets/svg/logo.svg';

import './styles.scss';

import LanguageSwitcher from '../LanguageSwitcher'

export default function Pagination(props) {
  return (
    <>
      <div className="header-pagination">
        <div className="header-pagination__container">
          <img src={logo} className="header-pagination__container-logo" alt="Cat-Dog Logo" />

          <div className="header-pagination__container-links">
            <h2 style={{ opacity: props.currentPage === 0 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => props.section(0)}
            >
              {props.language ? 'Início' : 'Home'}
              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: props.currentPage === 0 ? '2px solid #2E7E75' : '0',
                  width: props.currentPage === 0 ? '100%' : '0'
                }}
              />
            </h2>

            <h2 style={{ opacity: props.currentPage === 1 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => props.section(1)}
            >
              {props.language ? 'Sobre mim' : 'About'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: props.currentPage === 1 ? '2px solid #2E7E75' : '0',
                  width: props.currentPage === 1 ? '100%' : '0'
                }}
              />
            </h2>

            <h2 style={{ opacity: props.currentPage === 2 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => props.section(2)}
            >
              {props.language ? 'Especialidades' : 'Skills'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: props.currentPage === 2 ? '2px solid #2E7E75' : '0px',
                  width: props.currentPage === 2 ? '100%' : '0%'
                }}
              />
            </h2>

            <h2 style={{ opacity: props.currentPage === 3 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => props.section(3)}
            >
              {props.language ? 'Contato' : 'Contact'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: props.currentPage === 3 ? '2px solid #2E7E75' : '0',
                  width: props.currentPage === 3 ? '100%' : '0'
                }}
              />
            </h2>

          </div>
          <LanguageSwitcher language={props.languageChanger} />
        </div>
        
      </div>
    </>
  );
}