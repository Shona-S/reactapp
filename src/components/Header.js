import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Make sure to include the header styling

const Header = ({ cart }) => {
  const totalItems = cart.reduce((total, plant) => total + plant.quantity, 0);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Green Haven</h1>
        </div>
        <div className="cart">
          <Link to="/shopping-cart">
            <span>🛒</span> Cart ({totalItems})
          </Link>
        </div>
      </div>
      <div className="intro">
        <p>Green Haven: Where nature meets your home! 🌱 We offer lush, high-quality plants to brighten your spaces, purify the air, and bring joy to your everyday life. Let’s grow together! 🌿
</p>
      </div>
    </header>
  );
};

export default Header;

