// External function/data imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
// Internal function/data imports
import {
  updateWithholding,
  selectWithholding,
  selectIncomeSource,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
import NavButtons from "../components/NavButtons";
import DollarInput from "../components/DollarInput";

// setup

const IncomeWithholding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const withholding = useSelector(selectWithholding(incomeId));
  const incomeSource = useSelector(
    selectIncomeSource(incomeId)
  );

  const changeHandler = (withholding: number) => {
    dispatch(
      updateWithholding({ incomeId, withholding })
    );
  };
  const redirectToSource = () => {
    if (incomeSource === "salary") {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/salary");
    } else if (incomeSource === "pay") {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/pay");
    }
  };
  const redirectToIncomeDates = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/dates");
  };

  return (
    <div className="input-income-withholding">
      <DollarInput
        label="Withholding"
        value={withholding}
        dataHandler={changeHandler}
      />
      <NavButtons
        prevHandler={redirectToSource}
        nextHandler={redirectToIncomeDates}
      />
    </div>
  )
};

export default IncomeWithholding;
