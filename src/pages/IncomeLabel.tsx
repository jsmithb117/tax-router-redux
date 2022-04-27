// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


// External Component imports
import TextField from "@mui/material/TextField";
import Fade from 'react-reveal/Fade';

// Internal function/data imports
import {
  updateIncomeLabel,
  selectIncomeLabel,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import NavButtons from "../components/NavButtons";
import anim from "../resources/animation-delay";

// Internal Component imports
// setup
type IncomeLabelParams = {
  incomeIdString?: string;
}

const IncomeLabel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString }: IncomeLabelParams = useParams();

  const incomeId = parseInt(incomeIdString || "");
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
    }, anim.out)
  };
  const redirectToIncomeFrequency = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/frequency");
    }, anim.out)
  };

  return (
    <div className="input-label">
      <Fade left opposite when={show}>
        <TextField
          sx={{ marginTop: "1rem" }}
          label={"Income Name"}
          value={incomeLabel}
          onChange={changeHandler}
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
