// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

// Import icons as file paths
import menuIcon from "../assets/icons/menu.svg";
import profileIcon from "../assets/icons/profile.svg";

const Navbar = ({ toggleSidebar, openAuthModal }) => {
  const { user, logout } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => logout();

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <button className="icon-btn" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Menu" className="nav-icon" />
        </button>
        <span className="company-name">HireHub</span>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <div className="profile-dropdown">
          <button
            className="icon-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={profileIcon} alt="Profile" className="nav-icon" />
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              {user ? (
                <>
                  <button onClick={() => console.log("Go to profile")}>
                    Profile
                  </button>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <button onClick={openAuthModal}>Login</button>
                  <button onClick={openAuthModal}>Signup</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
