// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// External Component imports
import Fade from 'react-reveal/Fade';
import InputLabel from "@mui/material/InputLabel";

// Internal function/data imports
import { RootState } from "../store/store";
import { updateFilingYear } from "../store/slices/yearSlice";
import { ROUTES } from '../resources/routes-constants';
import anim from "../resources/animation-delay";

// Internal Component imports
import SimpleInput from "../components/SimpleInput";

// setup

const Year = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const year = useSelector((state: RootState) => state.year);

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
      setShow(true);
  }, []);

  const clickHandler = (val: string) => {
    dispatch(updateFilingYear(val));
  };
  const redirectToStatus = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(ROUTES.STATUS_ROUTE);
    }, anim.out);
  };

  return (
    <div className="input-year">
      <Fade left opposite when={show}>
      <InputLabel id="simple-year-label">Tax Year</InputLabel>
        <SimpleInput
          testId="year-input"
          label={""}
          value={year.filingYear}
          options={year.options}
          dataHandler={clickHandler}
          nextHandler={redirectToStatus}
        />
      </Fade>
    </div>
  );
};

export default Year;
