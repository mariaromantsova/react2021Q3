import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <ul className="navbar-nav">
        {routes.map(route => (
          <li className="nav-item" key={route.path}>
            <NavLink className="nav-link" exact to={route.path}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
