import React, { useState } from "react";
import TemplateSelector from "../components/resume/TemplateSelector";
import ResumeForm from "../components/resume/ResumeForm";
import ResumePreview from "../components/resume/ResumePreview";
import ResumeSuggestions from "../components/resume/ResumeSuggestions";
import "../styles/resume-builder.css";

/**
 * Phase 1 focuses on:
 * - Clean, responsive layout
 * - Form state + live preview
 * - Template selection
 * - Upload stub (PDF/DOCX) – we’ll parse in Phase 3
 * - Suggestions placeholder – we’ll power it in Phase 4/5
 */
const ResumeBuilder = () => {
  // Central resume state shared by form & preview
  const [resume, setResume] = useState({
    basics: {
      name: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      summary: "",
    },
    skills: [],
    education: [
      { school: "", degree: "", start: "", end: "", details: "" },
    ],
    experience: [
      { company: "", role: "", start: "", end: "", bullets: [""] },
    ],
    projects: [
      { name: "", link: "", bullets: [""] },
    ],
  });

  const [template, setTemplate] = useState("minimal"); // 'minimal' | 'modern' | 'corporate'
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    // Phase 3: send to backend for parsing -> then setResume with parsed fields
    // e.g., const parsed = await parseResume(file)
    // setResume(parsed)
  };

  return (
    <div className="resume-builder-page">
      {/* Header: template picker + upload */}
      <div className="rb-header">
        <h2>Resume Builder</h2>

        <div className="rb-actions">
          <TemplateSelector template={template} setTemplate={setTemplate} />
          <label className="upload-btn">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleUpload}
            />
            Upload Resume (PDF/DOCX)
          </label>
          {uploadedFile && (
            <span className="file-chip" title={uploadedFile.name}>
              {uploadedFile.name}
            </span>
          )}
        </div>
      </div>

      {/* Body: form + preview + suggestions */}
      <div className="rb-grid">
        <section className="rb-panel rb-form">
          <ResumeForm resume={resume} setResume={setResume} />
        </section>

        <section className="rb-panel rb-preview">
          <ResumePreview resume={resume} template={template} />
        </section>

        <aside className="rb-panel rb-suggestions">
          <ResumeSuggestions resume={resume} />
        </aside>
      </div>
    </div>
  );
};

export default ResumeBuilder;
