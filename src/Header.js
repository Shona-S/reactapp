import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shopping-cart">Shopping Cart</Link>
      </nav>
      <div>
        <span>Cart: {totalItems} items</span>
      </div>
    </header>
  );
}

export default Header;
