import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile'; // Import the new UserProfile component
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './styles/main.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/user-profile">User Profile</Link></li> 
          <li><Link to="/dashboard">Dashborad</Link></li>{/* Added User Profile link */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} /> {/* Route for user profile */}
        <Route path="/dashborad" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
