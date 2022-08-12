import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './addToCart';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});