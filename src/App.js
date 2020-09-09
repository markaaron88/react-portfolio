import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Cube } from 'react-preloaders';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      {/* <Cube
        animation="slide-down"
        time={1800}
        background="linear-gradient(180deg, #32292f 0%, #99e1d9 100%)"
      /> */}

      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
