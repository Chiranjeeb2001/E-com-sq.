

import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ categories, setCategoryFilter, setPriceRangeFilter, scrollToTop }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    setPriceRangeFilter([0, 50000]); 
    scrollToTop(); 
  };

  const handlePriceFilter = () => {
    setPriceRangeFilter([parseFloat(minPrice), parseFloat(maxPrice)]);
    scrollToTop(); 
  };

  return (
    <div className="sidebar">
      <h2>Filter Products</h2>
      <div className="category-filter">
        <h3>Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleCategoryClick(category)}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="price-filter">
        <h3>Price Range</h3>
        <input type="number" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        <button onClick={handlePriceFilter}>Apply</button>
      </div>
    </div>
  );
};

export default Sidebar;
