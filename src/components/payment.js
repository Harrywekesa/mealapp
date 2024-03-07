import React, { useState } from 'react';

function PaymentScreen() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Add payment logic here

  return (
    <div>
      <h1>Payment Screen</h1>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        </label>
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default PaymentScreen;