import React, { useState } from "react";

const ForgotPasswordForm = ({ onSwitch }) => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div>
      <h2>Reset your password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="primary-btn">Send Reset Link</button>
      </form>
      <p className="link-text" onClick={onSwitch}>Back to login</p>
    </div>
  );
};

export default ForgotPasswordForm;
