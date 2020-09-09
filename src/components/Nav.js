import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Projects' },
  { to: '/contact', text: 'About' },
];

const Nav = () => {
  return (
    <div className="navbar">
      <h1 id="logo">
        <span role="img" className="wave" aria-label="wave">
          👋🏾&nbsp;
        </span>
      </h1>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
