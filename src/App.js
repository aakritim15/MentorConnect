// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import PaymentForm from './components/PaymentForm';
import PaymentSummary from './components/PaymentSummary';
import './App.css';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} className="p-0">
          <Sidebar />
        </Col>
        <Col xs={6} className="d-flex align-items-center">
          <PaymentForm />
        </Col>
        <Col xs={3} className="d-flex align-items-center">
          <PaymentSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
