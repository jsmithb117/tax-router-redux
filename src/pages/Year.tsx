// External function/data imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

// External Component imports
// Internal function/data imports
import { RootState } from "../store/store";
import { updateFilingYear } from "../store/slices/yearSlice";
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
import SimpleInput from "../components/SimpleInput";

// setup

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

  return (
    <div className="input-year">
      <SimpleInput
        label={"Tax Year"}
        value={year.filingYear}
        options={year.options}
        dataHandler={clickHandler}
        nextHandler={redirectToStatus}
      />
    </div>
  )
}

export default Year;
