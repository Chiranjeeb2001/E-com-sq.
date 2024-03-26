

import React from 'react';
import './CartIcon.css'; 


const CartIcon = ({ onClick, cartItems }) => {
  const itemCount = cartItems.length;

  return (
    <div className="cart-icon" onClick={onClick}>
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
