import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../features/counter/quoteSlice';

export const store = configureStore({
  reducer: {
    generate: quoteReducer,
  },
});
