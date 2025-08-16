// src/pages/Home.jsx
import React, { useContext } from "react";
import "../styles/home.css";
import { AuthContext } from "../context/AuthContext";

const Home = ({ openAuthModal }) => {
  const { user } = useContext(AuthContext);

  const handleAction = (path) => {
    if (!user) {
      openAuthModal();
    } else {
      window.location.href = path; // or use navigate()
    }
  };

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1 className="home-title">Welcome to HireHub</h1>
        <p className="home-subtitle">
          Your one-stop career development platform — build resumes, check ATS
          scores, explore templates, and more.
        </p>

        <div className="home-buttons">
          <button
            className="home-btn"
            onClick={() => handleAction("/resume")}
          >
            Build Resume
          </button>

          <button
            className="home-btn"
            onClick={() => handleAction("/upload-resume")}
          >
            Upload Resume
          </button>

          <button
            className="home-btn"
            onClick={() => handleAction("/ats-score")}
          >
            Check ATS Score
          </button>

          <button
            className="home-btn"
            onClick={() => handleAction("/templates")}
          >
            View Templates
          </button>

          <button
            className="home-btn"
            onClick={() => handleAction("/search")}
          >
            Search Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
