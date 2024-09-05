import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Retrieve userId from URL
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/profile/${userId}`, { fullName, contactNo, email, linkedin, info });
      alert('Profile information saved successfully!');
    } catch (error) {
      console.error('Error saving profile information:', error.response ? error.response.data : error.message);
      alert('Error saving profile information: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="form-container">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="LinkedIn Handle"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          required
        />
        <textarea
          placeholder="Additional Info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default UserProfile;
