// src/components/PaymentSummary.js
import React from 'react';
import { Card } from 'react-bootstrap';
import './PaymentSummary.css';

const PaymentSummary = () => {
  const mentorCharges = 100;
  const platformFee = 400;
  const total = mentorCharges + platformFee;

  return (
    <Card className="p-4 payment-summary">
      <h3>You're paying,</h3>
      <h1 className="amount">₹{total}</h1>
      <p>Mentor Charges ₹{mentorCharges}</p>
      <p>Platform fee ₹{platformFee}</p>
      <hr />
      <p>Total ₹{total}</p>
    </Card>
  );
};

export default PaymentSummary;
