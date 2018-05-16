import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="container">
      <h2>
        <Link to="/">Best blog ever</Link>
      </h2>
    </div>
  </header>
);

export default Header;
