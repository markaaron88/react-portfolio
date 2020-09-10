import React from 'react';
import { Cube } from 'react-preloaders';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Cube
        animation="slide-down"
        time={1800}
        background="linear-gradient(180deg, #32292f 0%, #99e1d9 100%)"
      />

      <Nav />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
