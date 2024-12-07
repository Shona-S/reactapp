import React from 'react';

function ShoppingCart({ cart, removeFromCart, updateQuantity }) {
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Total: ${totalCost}</h2>
        <h3>Total items: {totalItems}</h3>
        <button>Checkout - Coming Soon</button>
        <button>Continue Shopping</button>
      </div>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name} - ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
