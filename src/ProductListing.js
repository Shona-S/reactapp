import React from 'react';
import Product from './Product';

function ProductListing({ addToCart }) {
  const plants = [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulent', image: 'image1.jpg' },
    { id: 2, name: 'Snake Plant', price: 20, category: 'Indoor', image: 'image2.jpg' },
    { id: 3, name: 'Fiddle Leaf Fig', price: 30, category: 'Indoor', image: 'image3.jpg' },
    { id: 4, name: 'Cactus', price: 15, category: 'Succulent', image: 'image4.jpg' },
    { id: 5, name: 'Spider Plant', price: 25, category: 'Indoor', image: 'image5.jpg' },
    { id: 6, name: 'Peace Lily', price: 40, category: 'Tropical', image: 'image6.jpg' },
  ];

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div>
      <h1>Product Listing</h1>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {plants.filter(plant => plant.category === category).map(plant => (
              <Product key={plant.id} plant={plant} addToCart={addToCart} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
