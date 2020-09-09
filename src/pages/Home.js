import React from 'react';
// import Photo from '../components/Photo';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Paragraph from '../components/Paragraphs';

const Home = () => {
  return (
    <div>
      <Title />
      <Paragraph paragraph={'I am a recent graduate of CSUMB'} />
      <Paragraph paragraph={'I majored in Computer Science'} />
      <Paragraph paragraph={'I love all things technolgy related'} />
      <Footer />
    </div>
  );
};

export default Home;
