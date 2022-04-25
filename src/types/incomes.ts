export interface LookupTable {
  [key: string]: string;
}

export interface Income {
  id: number;
  label: string;
  salary: number;
  frequency: string;
  incomeSource: string;
  pay: number;
  withholding: number;
  startDate: string;
  endDate: string;
}

export interface IncomesStore {
  incomes: Income[];
  options: string[];
  lookupTable: LookupTable;
}