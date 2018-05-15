import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => (
  <header>
    <h2>
      <Link to="/">Best blog ever</Link>
    </h2>

    <Search />
  </header>
);

export default Header;
