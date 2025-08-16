// src/components/Sidebar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Sidebar.css";

// Import icons as file paths
import homeIcon from "../assets/icons/home.svg";
import resumeIcon from "../assets/icons/resume.svg";
import uploadIcon from "../assets/icons/upload.svg";
import atsIcon from "../assets/icons/ats.svg";
import templateIcon from "../assets/icons/template.svg";
import searchIcon from "../assets/icons/search.svg";
import loginIcon from "../assets/icons/login.svg";
import logoutIcon from "../assets/icons/logout.svg";

const Sidebar = ({ isOpen, openAuthModal }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProtectedClick = (path) => {
    if (!user) {
      openAuthModal();
    } else {
      navigate(path);
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <img src={homeIcon} alt="Home" className="sidebar-icon" />
              {isOpen && <span>Home</span>}
            </Link>
          </li>

          <li onClick={() => handleProtectedClick("/resume")}>
            <div className="sidebar-link">
              <img src={resumeIcon} alt="Build Resume" className="sidebar-icon" />
              {isOpen && <span>Build Resume</span>}
            </div>
          </li>

          <li onClick={() => handleProtectedClick("/upload-resume")}>
            <div className="sidebar-link">
              <img src={uploadIcon} alt="Upload Resume" className="sidebar-icon" />
              {isOpen && <span>Upload Resume</span>}
            </div>
          </li>

          <li onClick={() => handleProtectedClick("/ats-score")}>
            <div className="sidebar-link">
              <img src={atsIcon} alt="Check ATS Score" className="sidebar-icon" />
              {isOpen && <span>Check ATS Score</span>}
            </div>
          </li>

          <li onClick={() => handleProtectedClick("/templates")}>
            <div className="sidebar-link">
              <img src={templateIcon} alt="Templates" className="sidebar-icon" />
              {isOpen && <span>Templates</span>}
            </div>
          </li>

          <li onClick={() => handleProtectedClick("/search")}>
            <div className="sidebar-link">
              <img src={searchIcon} alt="Search" className="sidebar-icon" />
              {isOpen && <span>Search</span>}
            </div>
          </li>

          {!user ? (
            <li onClick={openAuthModal}>
              <div className="sidebar-link">
                <img src={loginIcon} alt="Login" className="sidebar-icon" />
                {isOpen && <span>Login</span>}
              </div>
            </li>
          ) : (
            <li onClick={logout}>
              <div className="sidebar-link">
                <img src={logoutIcon} alt="Logout" className="sidebar-icon" />
                {isOpen && <span>Logout</span>}
              </div>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
