import React from 'react';
import Title from '../components/Title';
import Photo from '../components/Photo';


const Home = () => {
  return (
    <div className="home-section" id="home">
    <Photo/>
      <Title />
    </div>
  );
};

export default Home;
