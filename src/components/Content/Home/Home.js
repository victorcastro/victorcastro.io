import React from 'react';
import './Home.scss';
import Preloader from "../../Commons/Preloader/Preloader";
import Menu from "../../Commons/Menu/Menu";

const Home = () => (
  <div className="Home">
      <Preloader/>

      <div className="container">
          <div className="cursor-follower"/>
          <header className="header">
              <div className="head-top">
                  <div className="logo hover-masks-logo">
                      <a target="_blank" href="https://www.linkedin.com/in/victorcastrocontreras/" rel="noopener noreferrer">
                          <span className="mask-lnk">Victor <strong>Castro</strong></span>
                          <span className="mask-lnk mask-lnk-hover">Download <strong>CV</strong></span>
                      </a>
                  </div>
                  <Menu/>
              </div>
          </header>

          <div className="wrapper">

              <div className="section started personal" id="section-started">

                  <div className="video-bg">
                      <div className="video-bg-mask"/>
                      <div className="video-bg-texture" id="grained_container"/>
                  </div>

                  <div className="centrize full-width">
                      <div className="vertical-center">
                          <div className="started-content">
                              <div className="logo" style={{backgroundImage: 'url(images/me-bw.jpg)'}}/>
                              <h1 className="h-title">
                                  Hello, I’m <strong>Victor Castro</strong>, Full Stack Programmer. <br />
                                  Front-end <b>Developer</b> Based in <b>iOS, Flutter</b> and ReactJS.<br />
                                  Back-end with Java, <b>NodeJS</b> and PHP.
                              </h1>
                              <div className="h-subtitle typing-subtitle">
                                  <p>I code cool <strong>websites</strong></p>
                                  <p>I develop <strong>mobile apps</strong></p>
                                  <p>I love <strong>javascript</strong></p>
                              </div>
                              <span className="typed-subtitle"/>
                          </div>
                      </div>
                  </div>
              </div>

          </div>

          <footer className="footer">
              <div className="copy">
                  <p>victorcastro.io@icloud.com</p>
                  <p>(+51) 961 509 467</p>
              </div>
              <div className="soc-box">
                  <div className="follow-label">Follow Me</div>
                  <div className="soc">
                      <a target="_blank" href="https://github.com/victorcastro" rel="noopener noreferrer">
                          <span className="icon fab fa-github-alt"/>
                      </a>
                      <a target="_blank" href="https://www.linkedin.com/in/victorcastrocontreras/" rel="noopener noreferrer">
                          <span className="icon fab fa-linkedin-in"/>
                      </a>
                      <a target="_blank" href="https://api.whatsapp.com/send?phone=51961509467&text=Hola%20soy%20" rel="noopener noreferrer">
                          <span className="icon fab fa-whatsapp"/>
                      </a>
                  </div>
              </div>
              <div className="clear"/>
          </footer>

          <div className="lines">
              <div className="line-col"/>
              <div className="line-col"/>
              <div className="line-col"/>
              <div className="line-col"/>
              <div className="line-col"/>
          </div>
      </div>
  </div>
);

export default Home;
