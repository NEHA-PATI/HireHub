import React from "react";

const templates = [
  { id: "minimal", name: "Minimalist" },
  { id: "modern", name: "Modern" },
  { id: "corporate", name: "Corporate" },
];

const TemplateSelector = ({ template, setTemplate }) => {
  return (
    <div className="template-selector">
      {templates.map((t) => (
        <button
          key={t.id}
          className={`template-pill ${template === t.id ? "active" : ""}`}
          onClick={() => setTemplate(t.id)}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
