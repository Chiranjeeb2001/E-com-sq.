import React, { useState } from 'react';
import './CartPopup.css'; 
import Checkout from '../Checkout/Checkout'; 

const CartPopup = ({ cartItems, isOpen, togglePopup, totalCartPrice, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const [showCheckout, setShowCheckout] = useState(false); 

  
  const toggleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <div className={`cart-popup ${isOpen ? 'open' : ''}`}>
      <div className="cart-popup-content">
        <button className="close-btn" onClick={togglePopup}>Close</button>
        <div className="cart-items">
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className="product-image1 product-image2" />
                <div className="product-details">
                  <h3>{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => decrementQuantity(item.id)}>-</button>
                    <p>Quantity: {item.quantity}</p>
                    <button className="quantity-btn" onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="subtotal">
          <h3>Total: ₹{totalCartPrice}</h3>
        </div>
        
        {cartItems.length > 0 && <button className="checkout-btn" onClick={toggleCheckout}>Checkout</button>}
        
        {showCheckout && <Checkout />}
      </div>
    </div>
  );
};

export default CartPopup;
