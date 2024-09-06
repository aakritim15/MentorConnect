// src/components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';  // For additional custom styling

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3 vh-100">
      <Nav className="flex-column">
        <Nav.Link href="/" className="active">Dashboard</Nav.Link>
        <Nav.Link href="#activity">Activity</Nav.Link>
        <Nav.Link href="#chat">Chat</Nav.Link>
        <Nav.Link href="#appointments">
          Appointments <span className="badge badge-danger">2</span>
        </Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
        <Nav.Link href="#documentation">Documentation</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
