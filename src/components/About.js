import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="Title">
      <h1>
        Web development is my passion, I have created full stack applications
        and enjoy the process of both front-end and back-end development.I am
        excited to learn new technologies and grow as a developer. Here is a
        list of technologies I have created applications in.
      </h1>
      <div className="contact-section-icons">
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'js-square']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'react']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'vuejs']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'html5']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'css3-alt']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'sass']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'python']} />
        <FontAwesomeIcon fixedWidth size="3x" icon={['fab', 'database']} />
      </div>
    </div>
  );
};

export default About;
