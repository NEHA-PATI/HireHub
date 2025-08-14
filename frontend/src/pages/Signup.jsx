import React, { useState } from 'react';
import { signupUser } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signupUser(formData);
      login(res.data);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input required type="email" placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input required type="password" placeholder="Password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <select onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
          <option value="user">User</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
