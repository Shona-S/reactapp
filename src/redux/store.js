import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ensure this is the correct path

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // This will manage the cart state
  },
});
