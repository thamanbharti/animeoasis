// PaymentPortal.js

import React, { useState } from 'react';
import './payment.css';

const PaymentPortal = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Implement your payment logic here
    alert('Payment Successful!');
  };

  return (
    <div>
      <div className='webname'><h1> Anime<h21>-oasis</h21> </h1></div>
      <div className="payment-portal">
        <h2>Payment Portal</h2>
        <div className="card-details">
          
          <input
            type="text"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="card-details">
         
          <input
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="card-details">
          
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </div>
        <button onClick={handlePayment}>Make Payment</button>
      </div>
    </div>
  );
};

export default PaymentPortal;
