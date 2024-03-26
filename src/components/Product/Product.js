import React, { useState } from 'react';
import './Product.css'; 
import Notification from '../Notification/Notification';

const Product = ({ product, addToCart, removeFromCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showNotification, setShowNotification] = useState(false); 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddToCart = () => {
    addToCart(product);
    setQuantity(quantity + 1); 
    setShowNotification(true); 
    setTimeout(() => {
      setShowNotification(false); 
    }, 3000); 
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(product);
      setQuantity(quantity - 1); 
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false); 
  };

  return (
    <div className="product" onClick={toggleModal}>
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <div className="quantity-buttons">
        {quantity > 0 && (
          <button className="quantity-button" onClick={(e) => { e.stopPropagation(); handleRemoveFromCart(); }}>
            -
          </button>
        )}
        <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}>
          {quantity > 0 ? `Quantity: ${quantity}` : "Add to Cart"}
        </button>
      </div>
      {showNotification && <Notification message={`${product.name} has been added to the cart`} duration={3000} onClose={handleNotificationClose} />}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <div className="product-details">
              <img src={process.env.PUBLIC_URL + product.image} alt={product.name} className="product-image3" />
              <div className="product-info">
                <h2>{product.name}</h2>
                {product.description && <p className="product-description">{product.description}</p>}
                <p>Price: ₹{product.price}</p>
                <div className="quantity-buttons">
                  {quantity > 0 && (
                    <button className="quantity-button" onClick={(e) => { e.stopPropagation(); handleRemoveFromCart(); }}>
                      -
                    </button>
                  )}
                  <button className="add-to-cart">{quantity > 0 ? `Quantity: ${quantity}` : "Add to Cart"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
