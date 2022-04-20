import { createSlice } from '@reduxjs/toolkit';

import { incomesStore } from '../defaultStore';
import { RootState } from '../store';

// Delete Me and my friends!
import { current } from '@reduxjs/toolkit'
// Delete Me and my friends!

export const incomesSlice = createSlice({
  name: 'incomes',
  initialState: incomesStore,
  reducers: {
    addIncome: (state) => {
      state.incomes.push({
        id: state.incomes.length,
        label: 'Income ' + (state.incomes.length + 1),
        salary: 0,
        frequency: 'weekly',
        incomeSource: 'salary',
        pay: 0,
        withholding: 0,
      });
    },
    removeIncome: (state, action) => {
      state.incomes.splice(action.payload, 1);
    },
    updateIncomeLabel: (state, action) => {
      state.incomes[action.payload.incomeId].label = action.payload.label;
    },
    updateSalary: (state, action) => {
      state.incomes[action.payload.incomeId].salary = action.payload.salary;
    },
    updateFrequency: (state, action) => {
      state.incomes[action.payload.incomeId].frequency = action.payload.frequency;
    },
    updateIncomeSource: (state, action) => {
      state.incomes[action.payload.incomeId].incomeSource = action.payload.incomeSource;
    },
    updatePay: (state, action) => {
      state.incomes[action.payload.incomeId].pay = action.payload.pay;
    },
    updateWithholding: (state, action) => {
      state.incomes[action.payload.incomeId].withholding = action.payload.withholding;
    },
  },
});

export const {
  addIncome,
  removeIncome,
  updateIncomeLabel,
  updateSalary,
  updateFrequency,
  updateIncomeSource,
  updatePay,
  updateWithholding,
} = incomesSlice.actions;

export const selectIncomes = (state: RootState) => state.incomes.incomes;
export const selectIncomeLabel = (id: number) => (state: RootState) => state.incomes.incomes[id].label;

export default incomesSlice.reducer;
