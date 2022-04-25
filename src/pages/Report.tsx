// External function/data imports
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// External Component imports
// Internal function/data imports
import { selectIncomes } from "../store/slices/incomesSlice";
import { selectFilingYear } from "../store/slices/yearSlice";
import { selectFilingStatus } from "../store/slices/statusSlice";
import { calculateIncomeFromPay, calculateIncomeFromSalary } from "../utility/calculateIncome";
import rates from "../resources/rates";

// Internal Component imports
// setup

const Report = () => {
  const incomes = useSelector(selectIncomes);
  const filingYear = useSelector(selectFilingYear);
  const filingStatus = useSelector(selectFilingStatus);

  const [totalIncome, setTotalIncome] = useState(0);
  const [taxLiability, setTaxLiability] = useState(0);

  useEffect(() => {
    let calculatedIncome = 0;
    incomes.forEach((income) => {
      if (income.incomeSource === "salary") {
        calculatedIncome += calculateIncomeFromSalary(
          income.salary,
          income.frequency,
          income.startDate,
          income.endDate,
        );
      } else {
        calculatedIncome += calculateIncomeFromPay(income.pay, income.frequency, income.startDate, income.endDate);
      }
    });
    setTotalIncome(calculatedIncome);
  }, [incomes, filingYear, filingStatus]);

  useEffect(() => {
    // traverses tax brackets, calculating tax liability, until the taxable income is zero
    let taxableIncome = totalIncome;
    let estimatedTaxes = 0;
    let rateIndex = 0;
    while (taxableIncome > 0) {
      const bracket = rates[filingYear].rates[rateIndex][filingStatus];
      const taxRate = rates[filingYear].rates[rateIndex].taxRate;
      // assigning max this way is kind of hacky, but I couldn't get index signatures to work
      const max = Object.values(bracket)[1];

      if (taxableIncome > max) {
        estimatedTaxes += max * taxRate / 100;
        taxableIncome -= max;
      } else {
        estimatedTaxes += taxableIncome * taxRate / 100;
        taxableIncome = 0;
      }
      rateIndex += 1;
    }
    setTaxLiability(estimatedTaxes);
  }, [totalIncome, filingYear, filingStatus]);

  return <>
    <h1>Report</h1>
    <h1>
      Total Income: ${totalIncome.toLocaleString()}
    </h1>
    <h2>
      Tax Liability: ${taxLiability.toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}
    </h2>
  </>
};

export default Report;
