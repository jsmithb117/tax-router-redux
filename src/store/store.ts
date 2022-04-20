import { configureStore } from '@reduxjs/toolkit';
import yearReducer from './slices/yearSlice';
import statusReducer from './slices/statusSlice';

export const store = configureStore({
  reducer: {
    year: yearReducer,
    status: statusReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
