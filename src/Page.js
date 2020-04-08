import React, { Component } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Pagination from './components/Pagination';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

import './global.scss';

class LandingPage extends Component {

  state = {
    currentPage: 3,
    language: true
  }

  handlePageChanger = (number) => {
    this.setState({currentPage: number})
  }

  handleLanguageChange = () => {
    const newLanguage = !this.state.language;
    this.setState({language: newLanguage});
  }

  render () {
    return (
      <>
        <Pagination
          currentPage={this.state.currentPage}
          language={this.state.language}
          languageChanger={this.handleLanguageChange}
          section={(number) => this.handlePageChanger(number)}
        />
        <ReactPageScroller
          pageOnChange={this.handlePageChanger}
          customPageNumber={this.state.currentPage}
        >
          <Home language={this.state.language} currentPage={this.state.currentPage} />
          <About language={this.state.language} currentPage={this.state.currentPage} />
          <Skills language={this.state.language} currentPage={this.state.currentPage} />
          <Contact language={this.state.language} currentPage={this.state.currentPage} />
        </ReactPageScroller>
      </>
    )
  }
}

export default LandingPage;