import { configureStore } from '@reduxjs/toolkit';

import yearReducer from './slices/yearSlice';
import statusReducer from './slices/statusSlice';
import incomesReducer from './slices/incomesSlice';

export const store = configureStore({
  reducer: {
    year: yearReducer,
    status: statusReducer,
    incomes: incomesReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
