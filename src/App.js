import React from 'react';
import { Cube } from 'react-preloaders';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div>
      <Cube
        animation="slide-down"
        time={900}
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
