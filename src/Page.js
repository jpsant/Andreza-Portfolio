import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

import './global.css'   //estilizações globais

function LandingPage() {
  const [page, setPage] = useState(0);

  const handlePageChanger = (number) => {
    setPage(number);
  }
  

  return (
      <ReactPageScroller
        pageOnChange={handlePageChanger}
        customPageNumber={page}
      >
        <Home />
        <About />
        <Skills />
        <Contact />
      </ReactPageScroller>
  )
}

export default LandingPage;