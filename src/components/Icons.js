import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Firebasepic from '../assets/firebasewhite.png';
import Mysql from '../assets/mysql.png';

const Icons = () => {
  return (
    <div className="contact-section-icons">
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'js-square']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'react']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'vuejs']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'html5']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'css3-alt']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'sass']} />
      <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'python']} />
      <img src={Firebasepic} alt="firebase" />
      <img src={Mysql} alt="mysql" />
    </div>
  );
};

export default Icons;
