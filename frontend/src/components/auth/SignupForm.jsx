import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import googleIcon from "../../assets/icons/google.svg";

const SignupForm = ({ onSwitch }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleEmailSignup = (e) => {
    e.preventDefault();
    // API call for signup here
    login({ email: formData.email, name: formData.name });
  };

  const handleGoogleSignup = () => {
    alert("Google Signup Clicked");
  };

  return (
    <div>
      <h2>Sign up for HireHub</h2>
      <button className="google-btn" onClick={handleGoogleSignup}>
        <img src={googleIcon} alt="Google" /> Sign up with Google
      </button>

      <div className="divider"><span>or</span></div>

      <form onSubmit={handleEmailSignup}>
        <input
          type="text"
          placeholder="Full name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
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
        <button type="submit" className="primary-btn">Sign Up</button>
      </form>

      <p className="link-text">Already have an account? <span onClick={onSwitch}>Log in</span></p>
    </div>
  );
};

export default SignupForm;
