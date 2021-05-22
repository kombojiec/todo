import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <NavLink to="/" className="nav__logo">TypeScript</NavLink>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">ToDo</NavLink>
            </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link">Info</NavLink>
            </li>
        </ul>
      </div>
    </nav>
  )
}