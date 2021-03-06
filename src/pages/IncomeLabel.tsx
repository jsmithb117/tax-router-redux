// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';

// External Component imports
import TextField from "@mui/material/TextField";
import Fade from 'react-reveal/Fade';
import InputLabel from "@mui/material/InputLabel";

// Internal function/data imports
import {
  updateIncomeLabel,
  selectIncomeLabel,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants';
import NavButtons from "../components/NavButtons";
import anim from "../resources/animation-delay";

// Internal Component imports
// setup

const IncomeLabel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const incomeId = parseInt(location.pathname.split('/')[2]);
  const incomeLabel = useSelector(selectIncomeLabel(incomeId));

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  const changeHandler = (e: any) => {
    const label = e.target.value;
    dispatch(
      updateIncomeLabel({ incomeId, label })
    );
  };
  const prevHandler = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      const isFirstIncome = incomeId === 0;
      if (isFirstIncome) {
        navigate(ROUTES.STATUS_ROUTE);
      } else {
        navigate(ROUTES.INCOMES_ROUTE + "/" + (incomeId - 1) + "/dates");
      }
    }, anim.out);
  };
  const redirectToIncomeFrequency = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/frequency");
    }, anim.out);
  };

  return (
    <div className="input-label">
      <Fade left opposite when={show}>
      <InputLabel id="simple-name-label">Income Name</InputLabel>
        <TextField
          value={incomeLabel}
          onChange={changeHandler}
          data-testid="test-income-label"

        />
        <NavButtons
          prevHandler={prevHandler}
          nextHandler={redirectToIncomeFrequency}
        />
      </Fade>
    </div>
  );
};

export default IncomeLabel;
