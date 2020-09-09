import React from 'react';
import Buttons from './Buttons';
import { TitleHome } from '../pages/Home.styled';

const Title = () => {
  return (
    <TitleHome>
      <p>
        {' '}
        My name is <em>Mark Mariscal.</em>
      </p>
      <h1>
        I am a recent graduate of California State University Monterey Bay.I
        majored in Computer Science and love web development.
      </h1>
      <Buttons title="Projects" />
      <Buttons title="About" />
    </TitleHome>
  );
};

export default Title;
