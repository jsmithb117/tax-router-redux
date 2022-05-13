import { LookupTable, IncomesStore } from '../../types/incomes';

// year
export const yearStore = {
  filingYear: "2021",
  options: [
    "2021",
    "2022",
  ],
};
// year

// status
interface StatusStore {
  filingStatus: string;
  options: string[];
  lookupTable: LookupTable;
}
export const statusStore: StatusStore = {
  filingStatus: "single",
  options: [
    "Single",
    "Head of Household",
    "Married Filing Jointly",
    "Married Filing Separately",
  ],
  lookupTable: {
    "Single": "single",
    "Head of Household": "head-of-household",
    "Married Filing Jointly": "married-joint",
    "Married Filing Separately": "married-separate",
    "single": "Single",
    "head-of-household": "Head of Household",
    "married-joint": "Married Filing Jointly",
    "married-separate": "Married Filing Separately",
  }
};
// status


//incomes
export const incomesStore: IncomesStore = {
  incomes: [
    {
      id: 0,
      label: "First Income",
      salary: 100000,
      frequency: "weekly",
      incomeSource: "salary",
      pay: 0,
      withholding: 110,
      startDate: '2021-01-01',
      endDate: '2021-06-30',
    },
    {
      id: 1,
      label: "Second Income",
      salary: 0,
      frequency: "monthly",
      incomeSource: "pay",
      pay: 1500,
      withholding: 10,
      startDate: '2021-02-01',
      endDate: '2021-09-15',
    },
  ],
  options: [
    "Weekly",
    "Every other week",
    "Twice a month",
    "Monthly",
  ],
  lookupTable: {
    "weekly": "Weekly",
    "biweekly": "Every other week",
    "semimonthly": "Twice a month",
    "monthly": "Monthly",
    "Weekly": "weekly",
    "Every other week": "biweekly",
    "Twice a month": "semimonthly",
    "Monthly": "monthly",
  }
};
//incomes

const defaultStore = {
  year: yearStore,
  status: statusStore,
};

export default defaultStore;
