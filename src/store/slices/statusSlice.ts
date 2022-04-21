import { createSlice } from '@reduxjs/toolkit';

import { statusStore } from '../defaultStore';
import { RootState } from '../store';

export const statusSlice = createSlice({
  name: 'status',
  initialState: statusStore,
  reducers: {
    updateFilingStatus: (state, action) => {
      state.filingStatus = action.payload;
    },
  },
});

export const {
  updateFilingStatus,
} = statusSlice.actions;

export const selectFilingYear = (state: RootState) => state.year.filingYear;
export const selectFilingStatus = (state: RootState) => state.status;

export default statusSlice.reducer;
