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
interface LookupTable {
  [key: string]: string;
}
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
export const incomesStore = {
  incomes: [{
    id: 0,
    label: "Income 1",
    salary: 0,
    frequency: "weekly",
    incomeSource: "salary",
    pay: 0,
    withholding: 0,
  }],
};
//incomes

const defaultStore = {
  year: yearStore,
  status: statusStore,
};

export default defaultStore;
