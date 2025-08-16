import React from "react";

/**
 * A clean form that edits the centralized `resume` object.
 * Keep inputs simple; desktop shows two columns, mobile stacks.
 * You can expand fields anytime.
 */
const ResumeForm = ({ resume, setResume }) => {
  const setBasics = (field, value) =>
    setResume((r) => ({ ...r, basics: { ...r.basics, [field]: value } }));

  const setArrayItem = (key, idx, field, value) => {
    setResume((r) => {
      const arr = [...r[key]];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...r, [key]: arr };
    });
  };

  const addArrayItem = (key, template) =>
    setResume((r) => ({ ...r, [key]: [...r[key], template] }));

  const removeArrayItem = (key, idx) =>
    setResume((r) => {
      const arr = r[key].filter((_, i) => i !== idx);
      return { ...r, [key]: arr };
    });

  const setBullet = (key, idx, bIdx, value) => {
    setResume((r) => {
      const arr = [...r[key]];
      const item = { ...arr[idx] };
      const bullets = [...item.bullets];
      bullets[bIdx] = value;
      item.bullets = bullets;
      arr[idx] = item;
      return { ...r, [key]: arr };
    });
  };

  const addBullet = (key, idx) =>
    setResume((r) => {
      const arr = [...r[key]];
      const item = { ...arr[idx] };
      item.bullets = [...item.bullets, ""];
      arr[idx] = item;
      return { ...r, [key]: arr };
    });

  const removeBullet = (key, idx, bIdx) =>
    setResume((r) => {
      const arr = [...r[key]];
      const item = { ...arr[idx] };
      item.bullets = item.bullets.filter((_, i) => i !== bIdx);
      arr[idx] = item;
      return { ...r, [key]: arr };
    });

  const updateSkills = (value) =>
    setResume((r) => ({ ...r, skills: value.split(",").map(s => s.trim()).filter(Boolean) }));

  return (
    <div className="form-wrapper">
      <h3>Basics</h3>
      <div className="grid-2">
        <input placeholder="Full Name" value={resume.basics.name} onChange={(e)=>setBasics("name",e.target.value)} />
        <input placeholder="Job Title (e.g., Frontend Developer)" value={resume.basics.title} onChange={(e)=>setBasics("title",e.target.value)} />
        <input placeholder="Email" value={resume.basics.email} onChange={(e)=>setBasics("email",e.target.value)} />
        <input placeholder="Phone" value={resume.basics.phone} onChange={(e)=>setBasics("phone",e.target.value)} />
        <input placeholder="Location" value={resume.basics.location} onChange={(e)=>setBasics("location",e.target.value)} />
        <input placeholder="Website/LinkedIn/GitHub" value={resume.basics.website} onChange={(e)=>setBasics("website",e.target.value)} />
      </div>
      <textarea
        placeholder="Professional Summary"
        rows={4}
        value={resume.basics.summary}
        onChange={(e) => setBasics("summary", e.target.value)}
      />

      <h3>Skills (comma separated)</h3>
      <input
        placeholder="e.g., React, Node.js, MongoDB, Docker"
        value={resume.skills.join(", ")}
        onChange={(e) => updateSkills(e.target.value)}
      />

      <h3>Experience</h3>
      {resume.experience.map((exp, i) => (
        <div key={i} className="card">
          <div className="grid-2">
            <input placeholder="Company" value={exp.company} onChange={(e)=>setArrayItem("experience", i, "company", e.target.value)} />
            <input placeholder="Role/Title" value={exp.role} onChange={(e)=>setArrayItem("experience", i, "role", e.target.value)} />
            <input placeholder="Start (e.g., Jan 2023)" value={exp.start} onChange={(e)=>setArrayItem("experience", i, "start", e.target.value)} />
            <input placeholder="End (e.g., Present)" value={exp.end} onChange={(e)=>setArrayItem("experience", i, "end", e.target.value)} />
          </div>

          <div className="bullets">
            {exp.bullets.map((b, bIdx) => (
              <div key={bIdx} className="bullet-row">
                <input placeholder="Achievement / Responsibility" value={b} onChange={(e)=>setBullet("experience", i, bIdx, e.target.value)} />
                <button type="button" className="link danger" onClick={()=>removeBullet("experience", i, bIdx)}>Remove</button>
              </div>
            ))}
            <button type="button" className="link" onClick={()=>addBullet("experience", i)}>+ Add bullet</button>
          </div>

          <button type="button" className="link danger" onClick={() => removeArrayItem("experience", i)}>
            Remove Experience
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn"
        onClick={() =>
          addArrayItem("experience", { company: "", role: "", start: "", end: "", bullets: [""] })
        }
      >
        + Add Experience
      </button>

      <h3>Education</h3>
      {resume.education.map((ed, i) => (
        <div key={i} className="card">
          <div className="grid-2">
            <input placeholder="School" value={ed.school} onChange={(e)=>setArrayItem("education", i, "school", e.target.value)} />
            <input placeholder="Degree / Field" value={ed.degree} onChange={(e)=>setArrayItem("education", i, "degree", e.target.value)} />
            <input placeholder="Start" value={ed.start} onChange={(e)=>setArrayItem("education", i, "start", e.target.value)} />
            <input placeholder="End" value={ed.end} onChange={(e)=>setArrayItem("education", i, "end", e.target.value)} />
          </div>
          <textarea placeholder="Details (GPA, coursework, activities)" rows={2} value={ed.details} onChange={(e)=>setArrayItem("education", i, "details", e.target.value)} />
          <button type="button" className="link danger" onClick={() => removeArrayItem("education", i)}>
            Remove Education
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn"
        onClick={() =>
          addArrayItem("education", { school: "", degree: "", start: "", end: "", details: "" })
        }
      >
        + Add Education
      </button>

      <h3>Projects</h3>
      {resume.projects.map((p, i) => (
        <div key={i} className="card">
          <div className="grid-2">
            <input placeholder="Project Name" value={p.name} onChange={(e)=>setArrayItem("projects", i, "name", e.target.value)} />
            <input placeholder="Link (GitHub/Live)" value={p.link} onChange={(e)=>setArrayItem("projects", i, "link", e.target.value)} />
          </div>

          <div className="bullets">
            {p.bullets.map((b, bIdx) => (
              <div key={bIdx} className="bullet-row">
                <input placeholder="What did you build/achieve?" value={b} onChange={(e)=>setBullet("projects", i, bIdx, e.target.value)} />
                <button type="button" className="link danger" onClick={()=>removeBullet("projects", i, bIdx)}>Remove</button>
              </div>
            ))}
            <button type="button" className="link" onClick={()=>addBullet("projects", i)}>+ Add bullet</button>
          </div>

          <button type="button" className="link danger" onClick={() => removeArrayItem("projects", i)}>
            Remove Project
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn"
        onClick={() =>
          addArrayItem("projects", { name: "", link: "", bullets: [""] })
        }
      >
        + Add Project
      </button>
    </div>
  );
};

export default ResumeForm;
