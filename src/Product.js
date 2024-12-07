import React, { useState } from 'react';

function Product({ plant, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setIsAdded(true);
  };

  return (
    <div>
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button 
        onClick={handleAddToCart} 
        disabled={isAdded}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Product;
