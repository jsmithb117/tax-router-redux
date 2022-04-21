import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import SimpleInput from "../components/SimpleInput";

import { getKeyValue } from "../utility/functions";
import { updateFilingStatus, selectFilingStatus } from "../store/slices/statusSlice";
import { ROUTES } from '../resources/routes-constants'

const Status = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectFilingStatus);
  const {
    filingStatus,
    options,
    lookupTable,
  } = status;

  const clickHandler = (val: any) => {
    dispatch(updateFilingStatus(getKeyValue(lookupTable, val)));
  };
  const redirectToYear = () => {
    navigate(ROUTES.YEAR_ROUTE);
  };
  const redirectToIncomes = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/0/label");
  };

  return (
    <div className="input-status">
    <SimpleInput
        label={"Filing Status"}
        value={getKeyValue(lookupTable, filingStatus)}
        options={options}
        dataHandler={clickHandler}
        prevHandler={redirectToYear}
        nextHandler={redirectToIncomes}
    />
  </div>
  )
};

export default Status;
