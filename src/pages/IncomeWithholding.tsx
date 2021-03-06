// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// External Component imports
import Fade from "react-reveal/Fade";
import InputLabel from "@mui/material/InputLabel";

// Internal function/data imports
import {
  updateWithholding,
  selectWithholding,
  selectIncomeSource,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants';
import anim from "../resources/animation-delay";

// Internal Component imports
import NavButtons from "../components/NavButtons";
import DollarInput from "../components/DollarInput";

// setup

const IncomeWithholding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incomeIdString = useLocation().pathname.split('/')[2];
  const incomeId = parseInt(incomeIdString || "");

  const withholding = useSelector(selectWithholding(incomeId)) || 0;
  const incomeSource = useSelector(
    selectIncomeSource(incomeId)
  );

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  const changeHandler = (withholding: number) => {
    dispatch(
      updateWithholding({ incomeId, withholding })
    );
  };
  const redirectToSource = () => {
    setShow(false);
    if (incomeSource === "salary") {
      // delay allows 'out' animation to complete prior to redirect
      setTimeout(() => {
        navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/salary");
      }, anim.out);
    } else if (incomeSource === "pay") {
      // delay allows 'out' animation to complete prior to redirect
      setTimeout(() => {
        navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/pay");
      }, anim.out);
    }
  };
  const redirectToIncomeDates = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/dates");
    }, anim.out);
  };

  return (
    <div className="input-income-withholding">
      <Fade left opposite when={show}>
      <InputLabel id="simple-withholding-label">Withholding</InputLabel>
        <DollarInput
          value={withholding}
          dataHandler={changeHandler}
        />
        <NavButtons
          prevHandler={redirectToSource}
          nextHandler={redirectToIncomeDates}
        />
      </Fade>
    </div>
  );
};

export default IncomeWithholding;
