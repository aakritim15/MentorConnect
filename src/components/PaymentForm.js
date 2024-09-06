// src/components/PaymentForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './PaymentForm.css';

const PaymentForm = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Payment processed for: ${cardholderName}`);
  };

  return (
    <div className="payment-form-container">
      <h2>Let’s Make Payment (Card)</h2>
      <p>
        To start your subscription, input your card details to make payment.<br />
        You will be redirected to your bank's authorization page.
      </p>
      <Form onSubmit={handleSubmit} className="payment-form">
        <Form.Group controlId="formCardholderName">
          <Form.Control
            type="text"
            placeholder="Cardholder's Name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formCardNumber">
          <Form.Control
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formExpiryDate">
              <Form.Control
                type="text"
                placeholder="Expiry (MM/YY)"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCVC">
              <Form.Control
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="pay-now-btn">
          PAY NOW
        </Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
