import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart'; // Your shopping cart component

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

  const updateQuantity = (plantId, increment) => {
    setCart((prevCart) => prevCart.map(item => item.id === plantId 
      ? { ...item, quantity: item.quantity + increment }
      : item
    ));
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header cart={cart} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/product-listing" element={<ProductListing addToCart={addToCart} />} />
            <Route path="/shopping-cart" element={<ShoppingCart cart={cart} updateQuantity={updateQuantity} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
