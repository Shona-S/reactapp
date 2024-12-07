import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [],
};

// Create the Redux slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add a plant to the cart
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    // Action to remove a plant from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Action to increase the quantity of a plant
    increaseQuantity: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload.id);
      if (plant) {
        plant.quantity += 1;
      }
    },
    // Action to decrease the quantity of a plant
    decreaseQuantity: (state, action) => {
      const plant = state.items.find(item => item.id === action.payload.id);
      if (plant && plant.quantity > 1) {
        plant.quantity -= 1;
      }
    },
  },
});

// Export actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
