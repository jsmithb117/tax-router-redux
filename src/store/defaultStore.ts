//used for StatusStore and IncomesStore
interface LookupTable {
  [key: string]: string;
}
//used for StatusStore and IncomesStore

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
interface Income {
  id: number;
  label: string;
  salary: number;
  frequency: string;
  incomeSource: string;
  pay: number;
  withholding: number;
}
interface IncomesStore {
  incomes: Income[];
  options: string[];
  lookupTable: LookupTable;
}
export const incomesStore: IncomesStore = {
  incomes: [{
    id: 0,
    label: "Income 1",
    salary: 0,
    frequency: "weekly",
    incomeSource: "salary",
    pay: 0,
    withholding: 0,
  }],
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
