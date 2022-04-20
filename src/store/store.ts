import { configureStore } from '@reduxjs/toolkit';
import yearReducer from '../pages/yearSlice';

export const store = configureStore({
  reducer: {
    year: yearReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

