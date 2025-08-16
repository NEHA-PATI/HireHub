import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../utils/api";
import "../styles/Auth.css";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post(`/auth/reset-password/${token}`, { password });
      setMessage(data.message);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleReset}>
      <h2>Reset Password</h2>
      <input type="password" placeholder="New Password" value={password}
        onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Reset</button>
      <p>{message}</p>
    </form>
  );
};

export default ResetPassword;
