import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
import UAParser from "ua-parser-js";
import Fullscreen from "react-full-screen";

import Pagination from "./components/Pagination";
import MobileMenu from "./components/MobileMenu";

import MobileFullScreen from './components/MobileFullScreen';
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

import "./global.scss";

class LandingPage extends Component {
  componentDidMount() {
    let system = new UAParser();
    this.setState({
      device: system.getDevice().type,
    });
  }

  state = {
    currentPage: 0,
    language: true,
    aboutSection: 0,
    skillsSection: 0,
    device: "",
    isFull: false,
  };

  handlePageChanger = (number) => {
    this.setState({ currentPage: number });
  };

  handleLanguageChange = () => {
    const newLanguage = !this.state.language;
    this.setState({ language: newLanguage });
  };

  handleAboutSection = (num) => {
    let section = this.state.aboutSection;
    section = section + num;

    if (section < 0) {
      this.setState({ aboutSection: 0 });
    } else if (section >= 2) {
      this.setState({ aboutSection: 2 });
    } else {
      this.setState({ aboutSection: section });
    }
  };

  handleSkillSection = (num) => {
    let section = this.state.skillsSection;
    section = section + num;

    if (section < 0) {
      this.setState({ skillsSection: 0 });
    } else if (section >= 3) {
      this.setState({ skillsSection: 3 });
    } else {
      this.setState({ skillsSection: section });
    }
  };

  render() {
    let request = this.state.device === 'mobile' ?
      <MobileFullScreen language={this.state.language} hide={this.state.isFull} setFull={() => this.setState({isFull: true})} /> : null
    return (
      <>
        <Fullscreen enabled={this.state.isFull}>
          {request}
          <MobileMenu
            aboutHandler={this.handleAboutSection}
            skillsHandler={this.handleSkillSection}
            currentPage={this.state.currentPage}
            language={this.state.language}
            languageChanger={this.handleLanguageChange}
            section={(number) => this.handlePageChanger(number)}
          />
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
            <Home
              languageChanger={this.handleLanguageChange}
              language={this.state.language}
              currentPage={this.state.currentPage}
            />
            <About
              section={this.state.aboutSection}
              language={this.state.language}
              currentPage={this.state.currentPage}
            />
            <Skills
              section={this.state.skillsSection}
              language={this.state.language}
              currentPage={this.state.currentPage}
            />
            <Contact
              language={this.state.language}
              currentPage={this.state.currentPage}
            />
          </ReactPageScroller>
        </Fullscreen>
      </>
    );
  }
}

export default LandingPage;
