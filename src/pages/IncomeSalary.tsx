// External function/data imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
// Internal function/data imports
import {
  selectSalary,
  updateSalary,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
import DollarInput from "../components/DollarInput";
import NavButtons from "../components/NavButtons";

// setup

const IncomeSalary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const salary = useSelector(selectSalary(incomeId)) || 0;

  const changeHandler = (salary: number) => {
    dispatch(updateSalary({ incomeId, salary }));
  };
  const redirectToSource = () => {
    navigate(
      `${ROUTES.INCOMES_ROUTE}/${incomeId}/source`
    );
  };
  const redirectToWithholding = () => {
    navigate(
      `${ROUTES.INCOMES_ROUTE}/${incomeId}/withholding`
    );
  };

  return (
    <div className="input-income-salary">
      <DollarInput
        label="Salary"
        value={salary}
        dataHandler={changeHandler}
      />
      <NavButtons
        prevHandler={redirectToSource}
        nextHandler={redirectToWithholding}
      />
    </div>
  )
};

export default IncomeSalary;
