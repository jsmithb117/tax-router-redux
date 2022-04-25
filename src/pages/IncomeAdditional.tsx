// External function/data imports
import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
// Internal function/data imports
import {
  addIncome,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'


// Internal Component imports
import TwoButtons from "../components/TwoButtons";
import NavButtons from "../components/NavButtons";

// setup

const IncomeAdditional = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const button2Handler = () => {
    dispatch(addIncome());
    navigate(ROUTES.INCOMES_ROUTE + "/" + (incomeId + 1) + "/label");
  };
  const handlePrev = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + (incomeId - 1) + "/dates");
  };
  const handleNext = () => {
    navigate(ROUTES.REPORT);
  };

    return (
    <>
    <TwoButtons
      label1="No additional incomes"
      label2="Add additional income"
      button1Handler={handleNext}
      button2Handler={button2Handler}
    />
    <NavButtons
      prevHandler={handlePrev}
      nextHandler={handleNext}
    />
    </>
  )
};

export default IncomeAdditional;
