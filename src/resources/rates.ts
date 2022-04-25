
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
  headOfHousehold: TStatus
  marriedJoint: TStatus;
  marriedSeparate: TStatus;
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
        headOfHousehold: {
          min: 0,
          max: 14200,
        },
        marriedJoint: {
          min: 0,
          max: 19900,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 14200,
          max: 54200,
        },
        marriedJoint: {
          min: 19900,
          max: 81050,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 54200,
          max: 86350,
        },
        marriedJoint: {
          min: 81050,
          max: 172750,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 86350,
          max: 164900,
        },
        marriedJoint: {
          min: 172750,
          max: 329850,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 164900,
          max: 209425,
        },
        marriedJoint: {
          min: 329850,
          max: 418850,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 209400,
          max: 523600,
        },
        marriedJoint: {
          min: 418850,
          max: 628300,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 523600,
          max: Infinity,
        },
        marriedJoint: {
          min: 628300,
          max: Infinity,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 0,
          max: 14650,
        },
        marriedJoint: {
          min: 0,
          max: 20550,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 14650,
          max: 55900,
        },
        marriedJoint: {
          min: 20550,
          max: 83550,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 55900,
          max: 89050,
        },
        marriedJoint: {
          min: 83550,
          max: 178150,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 89050,
          max: 170050,
        },
        marriedJoint: {
          min: 178150,
          max: 340100,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 170050,
          max: 215950,
        },
        marriedJoint: {
          min: 340100,
          max: 431900,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 215950,
          max: 539900,
        },
        marriedJoint: {
          min: 431900,
          max: 647850,
        },
        marriedSeparate: {
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
        headOfHousehold: {
          min: 539900,
          max: Number.MAX_SAFE_INTEGER,
        },
        marriedJoint: {
          min: 647850,
          max: Number.MAX_SAFE_INTEGER,
        },
        marriedSeparate: {
          min: 323925,
          max: Number.MAX_SAFE_INTEGER,
        },
      },
    ],
  },
};

export default rates;
