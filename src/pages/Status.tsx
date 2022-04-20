import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

import SimpleInput from "../components/SimpleInput";

import { RootState } from "../store/store";
import { updateFilingStatus } from "../store/slices/statusSlice";
import { ROUTES } from '../resources/routes-constants'

const Status = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state: RootState) => state.status);
  const {
    filingStatus,
    options,
    lookupTable,
  } = status;

  const getKeyValue = function<T extends object, U extends keyof T> (obj: T, key: U) { return obj[key] }

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
