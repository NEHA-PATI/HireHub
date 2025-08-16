import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import googleIcon from "../../assets/icons/google.svg";

const LoginForm = ({ onSwitch, onForgot }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // API call for login here
    login({ email: formData.email });
  };

  const handleGoogleLogin = () => {
    // Google Auth logic here
    alert("Google Login Clicked");
  };

  return (
    <div>
      <h2>Log in to HireHub</h2>
      <button className="google-btn" onClick={handleGoogleLogin}>
        <img src={googleIcon} alt="Google" /> Continue with Google
      </button>

      <div className="divider"><span>or</span></div>

      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="Email address"
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="primary-btn">Continue</button>
      </form>

      <p className="link-text" onClick={onForgot}>Forgot password?</p>
      <p className="link-text">Don’t have an account? <span onClick={onSwitch}>Sign up</span></p>
    </div>
  );
};

export default LoginForm;
