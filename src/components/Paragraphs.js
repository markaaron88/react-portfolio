import React from 'react';
import { Text } from '../pages/Home.styled';

const Paragraphs = props => {
  const { paragraph } = props;
  return <Text>{paragraph}</Text>;
};

export default Paragraphs;
