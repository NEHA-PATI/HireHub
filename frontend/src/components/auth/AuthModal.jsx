import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import "../../styles/auth-modal.css";

const AuthModal = ({ onClose }) => {
  const [view, setView] = useState("login"); // login | signup | forgot

  const renderContent = () => {
    switch (view) {
      case "signup":
        return <SignupForm onSwitch={() => setView("login")} />;
      case "forgot":
        return <ForgotPasswordForm onSwitch={() => setView("login")} />;
      default:
        return <LoginForm onSwitch={() => setView("signup")} onForgot={() => setView("forgot")} />;
    }
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default AuthModal;
