import dayjs from 'dayjs';

interface LookupTable {
  [key: string]: number;
}
export const periodsPerYear: LookupTable = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
};

type CalculateType = (pay: number, frequency: string, start: string, end: string) => number;

export const calculateIncomeFromPay: CalculateType = (pay: number, frequency: string, start: string, end: string) => {
  const salary = pay * periodsPerYear[frequency];
  const percentageOfYearWorked = calculatePercentageOfYearWorked(start, end);
  return parseFloat((salary * percentageOfYearWorked).toFixed(2));
};

export const calculateIncomeFromSalary = (salary: number, frequency: string, start: string, end: string) => {
  const percentageOfYearWorked = calculatePercentageOfYearWorked(start, end);
  const result = parseFloat((salary * percentageOfYearWorked).toFixed(2));
  return result;
};

export const calculateTotalWithheld = (
  frequency: string,
  withholding: number,
  start: string,
  end: string
  ) => {
  const percentageOfYearWorked = calculatePercentageOfYearWorked(start, end);
  return parseFloat((withholding * percentageOfYearWorked * periodsPerYear[frequency]).toFixed(2));
};

const calculatePercentageOfYearWorked = (start: string, end: string) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);

  const dif = endDate.diff(startDate, 'days') + 1;
  const difPercentage = dif / 365;

  return difPercentage;
};

