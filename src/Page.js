import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Pagination from './components/Pagination';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import './global.scss';  //estilizações globais

function LandingPage() {
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(true);

  const handlePageChanger = (number) => {
    setPage(number);
  }

  const handleLanguageChange = () => {
    setLanguage(!language);
  }

  return (
    <>
      <Pagination
        currentPage={page}
        language={language}
        languageChanger={handleLanguageChange}
        section={(number) => handlePageChanger(number)}
      />
      <ReactPageScroller
        pageOnChange={handlePageChanger}
        customPageNumber={page}
      >
        <Home language={language} />
        <About language={language} />
        <Skills language={language} />
        <Contact language={language} />
      </ReactPageScroller>
    </>
  )
}

export default LandingPage;