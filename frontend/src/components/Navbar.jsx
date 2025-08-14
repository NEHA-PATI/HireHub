// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  const { toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

   const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-left">
        <button className="burger-menu" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="logo-container">
          <img src="/logo.png" alt="HireHub Logo" className="logo-img" />
          <span className="company-name">HireHub</span>
        </div>
      </div>

      {/* Right side: Theme toggle + Auth buttons */}
      <div className="nav-right">
        <button onClick={toggleTheme}>Toggle Theme</button>
        {user ? (
          <>
            <span className="user-role">{user.role}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
