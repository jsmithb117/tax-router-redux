import { createSlice } from '@reduxjs/toolkit';

import { yearStore } from '../store/defaultStore';

import { RootState } from '../store/store';

export const yearSlice = createSlice({
  name: 'year',
  initialState: yearStore,
  reducers: {
    updateFilingYear: (state, action) => {
      state.filingYear = action.payload;
    },
  },
});

export const {
  updateFilingYear,
} = yearSlice.actions;

export const selectFilingYear = (state: RootState) => state.year.filingYear;

export default yearSlice.reducer;
