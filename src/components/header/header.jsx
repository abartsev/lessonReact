import React from 'react';
import { Link } from 'react-router-dom'

import './header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;