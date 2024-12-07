import React from 'react';

const ShoppingCart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((plant) => (
            <div key={plant.id} className="cart-item">
              <img src={plant.thumbnail} alt={plant.name} />
              <div className="item-details">
                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>
                <p>Quantity: {plant.quantity}</p>
                <button onClick={() => updateQuantity(plant.id, 1)}>Increase</button>
                <button onClick={() => updateQuantity(plant.id, -1)}>Decrease</button>
                <button onClick={() => removeFromCart(plant.id)}>Remove</button>
              </div>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
          <button>Checkout (Coming Soon)</button>
          <button onClick={() => window.location.href = '/product-listing'}>Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
