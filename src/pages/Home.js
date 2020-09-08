import React from 'react';
import Photo from '../components/Photo';
import Footer from '../components/Footer';
import { Text } from './Home.styled';

const Home = () => {
  return (
    <div>
      <Text>
        Hello , my name is Mark Mariscal, I am a recent computer science
        graduate.
      </Text>

      <div>
        <Photo />
      </div>

      <Text>
        <Footer />
      </Text>
    </div>
  );
};

export default Home;
