import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import DollarInput from "../components/DollarInput";
import NavButtons from "../components/NavButtons";

import {
  selectPay,
  updatePay,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'

const IncomePay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const pay = useSelector(selectPay(incomeId)) || "";

  const changeHandler = (e: any) => {
    const newPay = e.target.value;
    dispatch(updatePay({ incomeId, pay: newPay }));
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
    <div className="input-income-pay">
      <DollarInput
        label="Pay"
        value={pay}
        dataHandler={changeHandler}
      />
      <NavButtons
        prevHandler={redirectToSource}
        nextHandler={redirectToWithholding}
      />
    </div>
  )
};

export default IncomePay;
