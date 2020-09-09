import React from 'react';
import { TitleHome } from '../pages/Home.styled';

const Title = () => {
  return (
    <TitleHome>
      <span role="img" className="wave" aria-label="wave">
        👋🏾&nbsp;
      </span>
      My name is Mark Mariscal.
    </TitleHome>
  );
};

export default Title;
