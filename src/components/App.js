import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ReactComponent as LogoSVG } from '../img/LogoSVG.svg';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Countries from './Countries';
import Header from './Header';

const App = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.welcomeAnimation');
    const logoSVGElements = document.querySelectorAll('.logoSVG');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(elements, { y: 50, opacity: 0, duration: 0.5, ease: "easeInOut", stagger: 0.1 });
    logoSVGElements.forEach(element => {
      gsap.to(element, {
        fill: "#555", scrollTrigger: {
          trigger: "#logoSVG__container",
          start: "180% 0%",
          markers: false,
          scrub: 1,
        }
      });
    });
  });

  return (
    < Router basename={process.env.PUBLIC_URL} >
      <div className="App">
        <div className="logo">
          < LogoSVG />
        </div>
        <div className="page">
          <header className="title">
            < Header />
          </header>
          <section className="newsletter">
            < Newsletter />
          </section>
          <section className="countries">
            < Countries />
          </section>
          <footer>
            < Footer />
          </footer>
        </div>
      </div>
    </ Router >
  );
}

export default App;
