import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>HireHub</h1>
      <div className="nav-right">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
