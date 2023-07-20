import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/box/quoteSlice';

export const store = configureStore({
  reducer: {
    generate: quoteReducer,
  },
});
