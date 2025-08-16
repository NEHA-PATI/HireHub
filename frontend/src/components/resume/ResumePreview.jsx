import React from "react";

/**
 * Renders a printable-looking resume using CSS classes per template.
 * You can export later to PDF by printing this element or using html2pdf.
 */
const ResumePreview = ({ resume, template }) => {
  const { basics, skills, education, experience, projects } = resume;

  return (
    <div className={`resume-preview ${template}`}>
      <header className="rp-header">
        <h1>{basics.name || "Your Name"}</h1>
        <div className="rp-sub">
          <span>{basics.title || "Title / Role"}</span>
          <span>{basics.email || "email@example.com"}</span>
          <span>{basics.phone || "+00 000000000"}</span>
          <span>{basics.location || "City, Country"}</span>
          {basics.website && <span>{basics.website}</span>}
        </div>
      </header>

      {basics.summary && (
        <section>
          <h3>Summary</h3>
          <p>{basics.summary}</p>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h3>Skills</h3>
          <ul className="pill-list">
            {skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>
      )}

      {experience.some(e => e.company || e.role) && (
        <section>
          <h3>Experience</h3>
          {experience.map((e, i) => (
            <div key={i} className="rp-item">
              <div className="rp-item-head">
                <strong>{e.role || "Role"}</strong>
                <span className="muted">{e.company || "Company"}</span>
                {(e.start || e.end) && <span className="muted">{e.start} – {e.end}</span>}
              </div>
              <ul>
                {e.bullets?.filter(Boolean).map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {projects.some(p => p.name) && (
        <section>
          <h3>Projects</h3>
          {projects.map((p, i) => (
            <div key={i} className="rp-item">
              <div className="rp-item-head">
                <strong>{p.name || "Project"}</strong>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="muted">
                    {p.link}
                  </a>
                )}
              </div>
              <ul>
                {p.bullets?.filter(Boolean).map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {education.some(ed => ed.school || ed.degree) && (
        <section>
          <h3>Education</h3>
          {education.map((ed, i) => (
            <div key={i} className="rp-item">
              <div className="rp-item-head">
                <strong>{ed.school || "School"}</strong>
                <span className="muted">{ed.degree || "Degree"}</span>
                {(ed.start || ed.end) && <span className="muted">{ed.start} – {ed.end}</span>}
              </div>
              {ed.details && <p>{ed.details}</p>}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
