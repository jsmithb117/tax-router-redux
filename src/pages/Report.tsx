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
import { periodsPerYear } from "../utility/calculateIncome";
import { selectIncomeFrequencyLookup } from "../store/slices/incomesSlice";

// Internal Component imports
// setup

const Report = () => {
  const incomes = useSelector(selectIncomes);
  const filingYear = useSelector(selectFilingYear);
  const filingStatus = useSelector(selectFilingStatus);
  const incomeFrequencyLookup = useSelector(selectIncomeFrequencyLookup);

  const [totalIncome, setTotalIncome] = useState(0);
  const [taxLiability, setTaxLiability] = useState(0);
  const [totalWithheld, setTotalWithheld] = useState(0);
  const [payFrequencies, setPayFrequencies] = useState<string[]>([]);

  const withholdingTooMuch = taxLiability < totalWithheld;

  // Calculate the total income
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

  // Calculates tax liability
  useEffect(() => {
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

  // Calculates total taxes withheld
  useEffect(() => {
    const count = incomes.reduce((acc, income) => {
      return acc + (income.withholding * periodsPerYear[income.frequency]);
    }, 0);
    setTotalWithheld(count);
  }, [incomes]);

  // Sets frequencies of incomes
  useEffect(() => {
    const newFreqs: string[] = [];
    incomes.forEach((income) => {
      if (!newFreqs.includes(income.frequency)) {
        newFreqs.push(income.frequency);
      }
    });
    setPayFrequencies(newFreqs);
  }, [incomes]);

  return <>
    <h1>Report</h1>
    <h1>
      Total Estimated Income: ${totalIncome.toLocaleString()}
    </h1>
    <h2>
      Total Estimated Tax Liability: ${taxLiability.toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}
    </h2>
    <h2>
      Total Estimated Withheld: ${totalWithheld.toLocaleString()}
    </h2>
    <h2>
      Estimated savings required: ${(taxLiability - totalWithheld).toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}
    </h2>
    {withholdingTooMuch &&
      <h2>
        {"It doesn't appear that you need to save any additional money this year."}
      </h2>
      }
    {!withholdingTooMuch &&
      <h2>
        Estimated savings required
        {payFrequencies.map((freq) => {
          return <div key={freq}>
            <br />
            {incomeFrequencyLookup[freq]}: ${((taxLiability - totalWithheld) / periodsPerYear[freq]).toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}
          </div>
        })}
      </h2>
    }

  </>
};

export default Report;
