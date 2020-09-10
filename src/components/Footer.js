import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { MarkGithubIcon } from '@primer/octicons-react';
// import { FooterLayout } from './Footer.styled';

const Footer = () => {
  return (
    <div className="footer-section">
      <a href="https://github.com/markaaron88">
        <MarkGithubIcon size={64} />
      </a>
      <a href="https://www.linkedin.com/in/markmariscal/">
        <FiLinkedin size={64} />
      </a>
    </div>
  );
};

export default Footer;
