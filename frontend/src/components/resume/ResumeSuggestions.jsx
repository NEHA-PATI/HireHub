import React from "react";

/**
 * Phase 1: Placeholder text.
 * Phase 4/5: We will call backend to:
 *  - Score resume vs JD
 *  - Extract skills and suggest missing ones
 *  - Show links to free resources, hackathons, etc.
 */
const ResumeSuggestions = ({ resume }) => {
  return (
    <div className="suggestions">
      <h3>Suggestions (coming soon)</h3>
      <ul className="muted-list">
        <li>Upload a JD to compute your Resume Score.</li>
        <li>We’ll suggest missing skills with free resources.</li>
        <li>Get job role matches, career path, hackathons & more.</li>
      </ul>
    </div>
  );
};

export default ResumeSuggestions;
