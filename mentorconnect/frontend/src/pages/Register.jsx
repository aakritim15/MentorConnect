import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/register', { email, password });
      alert(response.data.message); // Show server message
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      alert('Registration failed: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  const handleFacebookLogin = () => {
    window.location.href = 'http://localhost:5000/auth/facebook';
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <h1></h1>
        <button type="button" onClick={handleGoogleLogin}>
          Register with Google
        </button>
        <h1></h1>
        <button type="button" onClick={handleFacebookLogin}>
          Register with Facebook
        </button>
      </form>
    </div>
  );
}

export default Register;
