

import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, totalCartPrice, handleCheckout }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });
  const [step, setStep] = useState(1); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleCheckout(formData);
    setStep(2); 
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {step === 1 ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="number" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
          <button type="submit">Continue for Payment</button>
        </form>
      ) : (
        <div className="confirmation">
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total Price: ₹{totalCartPrice}</p>
          <h3>Shipping Information</h3>
          <p>Name: {formData.fullName}</p>
          <p>Address: {formData.address}</p>
          <p>City: {formData.city}</p>
          <p >Postal Code: {formData.postalCode}</p>
          <p>Country: {formData.country}</p>
          <button onClick={() => setStep(1)}>Back to Shipping</button>
          <button onClick={() => handleCheckout(formData)}>Complete Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
