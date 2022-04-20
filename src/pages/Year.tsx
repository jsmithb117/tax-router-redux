import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import SimpleInput from "../components/SimpleInput";
import { updateFilingYear } from "./yearSlice";
import { ROUTES } from '../resources/routes-constants'
import { useNavigate } from 'react-router-dom'

const Year = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const year = useSelector((state: RootState) => state.year);
  const clickHandler = (val: string) => {
    dispatch(updateFilingYear(val));
  };

  const redirectToStatus = () => {
    navigate(ROUTES.STATUS_ROUTE);
  };

  console.log('year: ', year)
  return (
    <div className="input-year">
      <SimpleInput
        label={"Tax Year"}
        value={year.filingYear}
        options={year.options}
        dataHandler={clickHandler}
        prevHandler={null}
        nextHandler={redirectToStatus}
      />
    </div>
  )
}

export default Year;
