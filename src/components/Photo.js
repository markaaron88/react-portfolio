import React from 'react';
import Beach from '../assets/Beach.JPG';
import Coding from '../assets/coding.jpg';
import { FlexGrid } from './Photo.styled';

const Photo = () => {
  return (
    <FlexGrid>
      <img src={Beach} alt="Logo" />
      <img src={Coding} alt="coding" />
    </FlexGrid>
  );
};

export default Photo;
