
interface TStatus {
  [key: string]: number;
  min: number;
  max: number;
}
interface TRate {
  [key: string]: string | number | TStatus;
  id: number;
  taxRate: number;
  single: TStatus;
  "head-of-household": TStatus
  "married-joint": TStatus;
  "married-separate": TStatus;
}
type Year = {
  label: number,
  rates: TRate[],
}
interface IRatesTable {
  [key: string]: Year;
}
const rates: IRatesTable = {
  2021: {
    label: 2021,
    rates: [
      {
        id: 0,
        taxRate: 10,
        single: {
          min: 0,
          max: 9950,
        },
        "head-of-household": {
          min: 0,
          max: 14200,
        },
        "married-joint": {
          min: 0,
          max: 19900,
        },
        "married-separate": {
          min: 0,
          max: 9950,
        },
      },
      {
        id: 1,
        taxRate: 12,
        single: {
          min: 9950,
          max: 40525,
        },
        "head-of-household": {
          min: 14200,
          max: 54200,
        },
        "married-joint": {
          min: 19900,
          max: 81050,
        },
        "married-separate": {
          min: 9950,
          max: 40525,
        },
      },
      {
        id: 2,
        taxRate: 22,
        single: {
          min: 40525,
          max: 86375,
        },
        "head-of-household": {
          min: 54200,
          max: 86350,
        },
        "married-joint": {
          min: 81050,
          max: 172750,
        },
        "married-separate": {
          min: 40525,
          max: 86375,
        },
      },
      {
        id: 3,
        taxRate: 24,
        single: {
          min: 86375,
          max: 164925,
        },
        "head-of-household": {
          min: 86350,
          max: 164900,
        },
        "married-joint": {
          min: 172750,
          max: 329850,
        },
        "married-separate": {
          min: 86375,
          max: 164925,
        },
      },
      {
        id: 4,
        taxRate: 32,
        single: {
          min: 164925,
          max: 209400,
        },
        "head-of-household": {
          min: 164900,
          max: 209425,
        },
        "married-joint": {
          min: 329850,
          max: 418850,
        },
        "married-separate": {
          min: 164925,
          max: 209400,
        },
      },
      {
        id: 5,
        taxRate: 35,
        single: {
          min: 209400,
          max: 523600,
        },
        "head-of-household": {
          min: 209400,
          max: 523600,
        },
        "married-joint": {
          min: 418850,
          max: 628300,
        },
        "married-separate": {
          min: 209425,
          max: 314150,
        },
      },
      {
        id: 6,
        taxRate: 37,
        single: {
          min: 523600,
          max: Infinity,
        },
        "head-of-household": {
          min: 523600,
          max: Infinity,
        },
        "married-joint": {
          min: 628300,
          max: Infinity,
        },
        "married-separate": {
          min: 314150,
          max: Infinity,
        },
      },
    ],
  },
  2022: {
    label: 2022,
    rates: [
      {
        id: 0,
        taxRate: 10,
        single: {
          min: 0,
          max: 10275,
        },
        "head-of-household": {
          min: 0,
          max: 14650,
        },
        "married-joint": {
          min: 0,
          max: 20550,
        },
        "married-separate": {
          min: 0,
          max: 10275,
        },
      },
      {
        id: 1,
        taxRate: 12,
        single: {
          min: 10275,
          max: 41775,
        },
        "head-of-household": {
          min: 14650,
          max: 55900,
        },
        "married-joint": {
          min: 20550,
          max: 83550,
        },
        "married-separate": {
          min: 10275,
          max: 41775,
        },
      },
      {
        id: 2,
        taxRate: 22,
        single: {
          min: 41775,
          max: 89075,
        },
        "head-of-household": {
          min: 55900,
          max: 89050,
        },
        "married-joint": {
          min: 83550,
          max: 178150,
        },
        "married-separate": {
          min: 41775,
          max: 89075,
        },
      },
      {
        id: 3,
        taxRate: 24,
        single: {
          min: 89075,
          max: 170050,
        },
        "head-of-household": {
          min: 89050,
          max: 170050,
        },
        "married-joint": {
          min: 178150,
          max: 340100,
        },
        "married-separate": {
          min: 89075,
          max: 170050,
        },
      },
      {
        id: 4,
        taxRate: 32,
        single: {
          min: 170050,
          max: 215950,
        },
        "head-of-household": {
          min: 170050,
          max: 215950,
        },
        "married-joint": {
          min: 340100,
          max: 431900,
        },
        "married-separate": {
          min: 170050,
          max: 215950,
        },
      },
      {
        id: 5,
        taxRate: 35,
        single: {
          min: 215950,
          max: 539990,
        },
        "head-of-household": {
          min: 215950,
          max: 539900,
        },
        "married-joint": {
          min: 431900,
          max: 647850,
        },
        "married-separate": {
          min: 215950,
          max: 323925,
        },
      },
      {
        id: 6,
        taxRate: 37,
        single: {
          min: 539990,
          max: Number.MAX_SAFE_INTEGER,
        },
        "head-of-household": {
          min: 539900,
          max: Number.MAX_SAFE_INTEGER,
        },
        "married-joint": {
          min: 647850,
          max: Number.MAX_SAFE_INTEGER,
        },
        "married-separate": {
          min: 323925,
          max: Number.MAX_SAFE_INTEGER,
        },
      },
    ],
  },
};

export default rates;
