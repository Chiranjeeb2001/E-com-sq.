import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './Product/Product';
import CartPopup from './CartPopup/CartPopup';
import products from '../Products';
import '../App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

import '@fortawesome/fontawesome-free/css/all.css';

function Home() {
 
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 30000]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = categoryFilter === '' || product.categories.includes(categoryFilter);
    const isPriceInRange = product.price >= priceRangeFilter[0] && product.price <= priceRangeFilter[1];
    return isCategoryMatch && isPriceInRange;
  });

  const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      <div className="container">
        <Sidebar
        
          categories={['Shoes', 'Shirts', 'T-Shirts', 'Watches', 'Shorts']}
          setCategoryFilter={setCategoryFilter}
          setPriceRangeFilter={setPriceRangeFilter}
          scrollToTop={scrollToTop} // Pass scrollToTop function to Sidebar
        />
        <Routes>
          <Route path="/" element={<div className="products">
            {filteredProducts.map(product => (
              <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>} />
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </div>
      <CartPopup
        cartItems={cartItems}
        isOpen={isCartOpen}
        togglePopup={toggleCart}
        totalCartPrice={totalCartPrice}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Footer />
    </div>
  );
}

export default Home;
