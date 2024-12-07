import React, { useState } from 'react';
import './ProductListing.css'; // Add styles for product display

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, thumbnail: 'path-to-image' },
  { id: 2, name: 'Snake Plant', price: 15, thumbnail: 'path-to-image' },
  { id: 3, name: 'Peace Lily', price: 20, thumbnail: 'path-to-image' },
  { id: 4, name: 'Spider Plant', price: 12, thumbnail: 'path-to-image' },
  { id: 5, name: 'Cactus', price: 8, thumbnail: 'path-to-image' },
  { id: 6, name: 'Succulent', price: 18, thumbnail: 'path-to-image' },
];

const ProductListing = ({ addToCart }) => {
  const [disabledButtons, setDisabledButtons] = useState({}); // Track disabled states for buttons

  const handleAddToCart = (plant) => {
    addToCart(plant);
    setDisabledButtons((prevState) => ({
      ...prevState,
      [plant.id]: true, // Disable the button for this plant
    }));
  };

  return (
    <div className="product-listing">
      <div className="products">
        {products.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.thumbnail} alt={plant.name} className="product-image" />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={disabledButtons[plant.id]} // Disable the button if already clicked
            >
              {disabledButtons[plant.id] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
