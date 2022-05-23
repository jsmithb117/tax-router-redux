// External function/data imports
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

// External Component imports
import Fade from 'react-reveal/Fade';
import InputLabel from "@mui/material/InputLabel";

// Internal function/data imports
import { getKeyValue } from "../utility/functions";
import { updateFilingStatus, selectStatus } from "../store/slices/statusSlice";
import { ROUTES } from '../resources/routes-constants';
import anim from "../resources/animation-delay";

// Internal Component imports
import SimpleInput from "../components/SimpleInput";

// setup

const Status = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(selectStatus);
  const {
    filingStatus,
    options,
    lookupTable,
  } = status;

  const [show, setShow] = useState(false);

  const clickHandler = (val: any) => {
    dispatch(updateFilingStatus(getKeyValue(lookupTable, val)));
  };
  const redirectToYear = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.YEAR_ROUTE);
    }, anim.out);
  };
  const redirectToIncomes = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/0/label");
    }, anim.out);
  };

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="input-status">
      <Fade left opposite when={show}>
      <InputLabel id="simple-status-label">Filing Status</InputLabel>

        <SimpleInput
          testId="status-input"
          label={""}
          value={getKeyValue(lookupTable, filingStatus)}
          options={options}
          dataHandler={clickHandler}
          prevHandler={redirectToYear}
          nextHandler={redirectToIncomes}
        />
      </Fade>
    </div>
  )
};

export default Status;
