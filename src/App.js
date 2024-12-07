import React, { useState } from 'react';
import Header from './Header';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingPlant = prevCart.find(item => item.id === plant.id);
      if (existingPlant) {
        return prevCart.map(item => item.id === plant.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== plantId));
  };

  const updateQuantity = (plantId, increment) => {
    setCart((prevCart) => prevCart.map(item => item.id === plantId 
      ? { ...item, quantity: item.quantity + increment }
      : item
    ));
  };

  return (
    <div>
      <Header cart={cart} />
      <ProductListing addToCart={addToCart} />
      <ShoppingCart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
