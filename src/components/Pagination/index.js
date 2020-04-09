import React from 'react';
import logo from '../../assets/svg/logo.svg';

import './styles.scss';

import LanguageSwitcher from '../LanguageSwitcher'

export default function Pagination({ currentPage, languageChanger, section, language }) {
  return (
    <>
      <ul className="pagination">
        <li className={currentPage === 0 ? "selectedPage" : ''}
          style={{ backgroundColor: currentPage === 0 ? '#2BAA9B' : currentPage === 2 ? '#2BAA9B' : '' }}
        >
          <a onClick={() => section(0)}></a>
        </li>
        <li className={currentPage === 1 ? "selectedPage" : ''}
          style={{ backgroundColor: currentPage === 0 ? '#2BAA9B' : currentPage === 2 ? '#2BAA9B' : '' }}
        >
          <a onClick={() => section(1)}></a>
        </li>
        <li className={currentPage === 2 ? "selectedPage" : ''}
          style={{ backgroundColor: currentPage === 0 ? '#2BAA9B' : currentPage === 2 ? '#2BAA9B' : '' }}
        >
          <a onClick={() => section(2)}></a>
        </li>
        <li className={currentPage === 3 ? "selectedPage" : ''}
          style={{ backgroundColor: currentPage === 0 ? '#2BAA9B' : currentPage === 2 ? '#2BAA9B' : '' }}
        >
          <a onClick={() => section(3)}></a>
        </li>
      </ul>
      <div className="header-pagination">

        <div className="header-pagination__container">
          <img src={logo} className="header-pagination__container-logo" alt="Cat-Dog Logo" />

          <div className="header-pagination__container-links">
            <h2 style={{ opacity: currentPage === 0 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => section(0)}
            >
              {language ? 'Início' : 'Home'}
              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: currentPage === 0 ? '2px solid #2E7E75' : '0',
                  width: currentPage === 0 ? '100%' : '0'
                }}
              />
            </h2>

            <h2 style={{ opacity: currentPage === 1 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => section(1)}
            >
              {language ? 'Sobre mim' : 'About'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: currentPage === 1 ? '2px solid #2E7E75' : '0',
                  width: currentPage === 1 ? '100%' : '0'
                }}
              />
            </h2>

            <h2 style={{ opacity: currentPage === 2 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => section(2)}
            >
              {language ? 'Especialidades' : 'Specialties'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: currentPage === 2 ? '2px solid #2E7E75' : '0px',
                  width: currentPage === 2 ? '100%' : '0%'
                }}
              />
            </h2>

            <h2 style={{ opacity: currentPage === 3 ? '1' : '0.5' }}
              className="header-pagination__container-links-h2"
              onClick={() => section(3)}
            >
              {language ? 'Contato' : 'Contact'}

              <hr className="header-pagination__container-links-h2-hr"
                style={{
                  border: currentPage === 3 ? '2px solid #2E7E75' : '0',
                  width: currentPage === 3 ? '100%' : '0'
                }}
              />
            </h2>

          </div>
          <LanguageSwitcher language={languageChanger} />
        </div>
      </div>
    </>
  );
}