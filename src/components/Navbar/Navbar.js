

import React, { useState } from 'react';
import './Navbar.css';
import CartIcon from '../CartIcon/CartIcon'; 

const Navbar = ({ cartItems, toggleCart }) => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    
    window.location.href = "/"; 
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/Home" className="logo">Logo</a>
        <ul className="nav-links">
          <li><CartIcon onClick={toggleCart} cartItems={cartItems} /></li> 
       
          <li className="profile-dropdown">
            <a href="#" onClick={toggleProfileDropdown}>Profile</a>
            {isProfileDropdownOpen && (
              <div className="dropdown-content">
                <a href="#">Orders</a>
                <a href="#">Account</a>
                <a href="#">Settings</a>
                <a href="#" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
