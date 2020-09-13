import React, { Component } from 'react';
import { Link } from 'react-scroll';

// eslint-disable-next-line react/prefer-stateless-function
class Nav extends Component {
  render () {
    return (
      <div className='navbar'>
        <nav>
          <ul>
            <Link
              activeClass='active'
              to='home'
              spy
              smooth
              offset={50}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass='active'
              to='projects'
              spy
              smooth
              offset={50}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy
              smooth
              offset={50}
              duration={500}
            >
              About
            </Link>
            <a className='Download' href='files/Mark_Mariscal.pdf' download>
              Resume
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
