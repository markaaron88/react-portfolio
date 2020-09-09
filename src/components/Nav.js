import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngellist } from 'react-icons/fa';
import './Nav.css';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/projects', text: 'Projects' },
  { to: '/contact', text: 'Contact' },
];

const Nav = () => {
  return (
    <div className="navbar">
      <h1 id="logo">
        <FaAngellist size={50} />
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
