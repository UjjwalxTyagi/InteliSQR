import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Email and Password are required');
      setSuccess('');
      return;
    }
``
    try {``
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'Login failed');
        setSuccess('');
        return;
      }

      console.log('Login success:', result);
      setError('');
      setSuccess('🎉 Hurray! You’ve successfully signed in.');

      setTimeout(() => setSuccess(''), 4000); // auto-hide after 4 seconds
    } catch (err) {
      setError('Something went wrong');
      setSuccess('');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2 className="heading">Welcome Back</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <input
          type="email"
          name="email"
          placeholder="UID"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
