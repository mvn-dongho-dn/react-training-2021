import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './couterSlice';
import favReducer from './favSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fav: favReducer
  },
});
