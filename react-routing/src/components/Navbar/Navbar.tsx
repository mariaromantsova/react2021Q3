import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
