import React from 'react';
import { ButtonType } from './Button.styled';

const Buttons = props => {
  const { title } = props;
  return <ButtonType>{title}</ButtonType>;
};

export default Buttons;
