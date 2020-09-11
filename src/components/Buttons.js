import React from 'react';
import { ButtonType } from './Button.styled';

const Buttons = props => {
  const { href } = props;
  return <ButtonType>{href}</ButtonType>;
};

export default Buttons;
