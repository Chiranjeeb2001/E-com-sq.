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
            {/*eslint-disable-next-line*/}
            <button onClick={toggleProfileDropdown}>Profile</button>
            {isProfileDropdownOpen && (
              <div className="dropdown-content">
                <a href="/orders">Orders</a>
                <a href="/account">Account</a>
                <a href="/settings">Settings</a>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
