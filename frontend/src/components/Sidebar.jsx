// src/components/Sidebar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <aside className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <img src="/src/assets/icons/home.svg" alt="Home" className="icon" />
              {isOpen && <span>Home</span>}
            </Link>
          </li>

          {user?.role === "user" && (
            <>
              <li>
                <Link to="/user/dashboard" className="sidebar-link">
                  <img src="/src/assets/icons/dashboard.svg" alt="Dashboard" className="icon" />
                  {isOpen && <span>User Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/user/profile" className="sidebar-link">
                  <img src="/src/assets/icons/profile.svg" alt="Profile" className="icon" />
                  {isOpen && <span>My Profile</span>}
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="sidebar-link">
                  <img src="/src/assets/icons/jobs.svg" alt="Jobs" className="icon" />
                  {isOpen && <span>Find Jobs</span>}
                </Link>
              </li>
            </>
          )}

          {user?.role === "recruiter" && (
            <>
              <li>
                <Link to="/recruiter/dashboard" className="sidebar-link">
                  <img src="/src/assets/icons/dashboard.svg" alt="Dashboard" className="icon" />
                  {isOpen && <span>Recruiter Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/recruiter/post-job" className="sidebar-link">
                  <img src="/src/assets/icons/postjob.svg" alt="Post Job" className="icon" />
                  {isOpen && <span>Post Job</span>}
                </Link>
              </li>
              <li>
                <Link to="/recruiter/applicants" className="sidebar-link">
                  <img src="/src/assets/icons/applicants.svg" alt="Applicants" className="icon" />
                  {isOpen && <span>View Applicants</span>}
                </Link>
              </li>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link to="/login" className="sidebar-link">
                  <img src="/src/assets/icons/login.svg" alt="Login" className="icon" />
                  {isOpen && <span>Login</span>}
                </Link>
              </li>
              <li>
                <Link to="/signup" className="sidebar-link">
                  <img src="/src/assets/icons/signup.svg" alt="Signup" className="icon" />
                  {isOpen && <span>Signup</span>}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
