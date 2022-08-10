import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './addToCart';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});