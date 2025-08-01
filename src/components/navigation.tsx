import React from 'react';
import { Link } from 'react-router-dom';
import './../pages/Home/styles.css';

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="nav">
      <div className="nav-left">
        <h1 className="nav-name">Philipp Bönsch</h1>
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
