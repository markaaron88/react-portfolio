import React from 'react';
import Mark from '../assets/mark.jpg';
import { FlexGrid } from './Photo.styled';

const Photo = () => {
  return (
    <FlexGrid>
      <img src={Mark} alt="Logo" />
    </FlexGrid>
  );
};

export default Photo;
