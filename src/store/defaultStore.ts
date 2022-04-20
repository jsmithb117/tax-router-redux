export const yearStore = {
  filingYear: "2021",
  options: [
    "2021",
    "2022",
  ],
};

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
const defaultStore = {
  year: yearStore,
  status: statusStore,
};

export default defaultStore;
