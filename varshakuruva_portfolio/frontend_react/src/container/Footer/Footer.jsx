import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Let's connect and explore potential collaborations!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:kuruva.v@northeastern.edu" className="p-text">kuruva.v@northeastern.edu</a>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="linkedin" />
          <a href="https://www.linkedin.com/in/varshakuruva/" target="_blank" rel="noopener noreferrer" className="p-text">linkedin.com/in/varshakuruva</a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);