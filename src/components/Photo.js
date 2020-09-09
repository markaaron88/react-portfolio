import React from 'react';
import Beach from '../assets/Beach.JPG';
import { FlexGrid } from './Photo.styled';

const Photo = () => {
  return (
    <FlexGrid>
      <img src={Beach} alt="Logo" />
      <img src={Beach} alt="Logo" />
      <img src={Beach} alt="Logo" />
    </FlexGrid>
  );
};

export default Photo;
