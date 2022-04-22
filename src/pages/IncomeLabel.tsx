import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TextField from "@mui/material/TextField";

import {
  updateIncomeLabel,
  selectIncomeLabel,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'

type IncomeLabelParams = {
  incomeIdString?: string;
}

const IncomeLabel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString }: IncomeLabelParams = useParams();

  const incomeId = parseInt(incomeIdString || "");
  const incomeLabel = useSelector(selectIncomeLabel(incomeId));

  const changeHandler = (e: any) => {
    const label = e.target.value;
    dispatch(
      updateIncomeLabel({ incomeId, label })
    );
  };
  const redirectToStatus = () => {
    navigate(ROUTES.STATUS_ROUTE);
  };
  const redirectToIncomeFrequency = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/frequency");
  };

  return (
    <div className="input-label">
      <TextField
        sx={{ marginTop: "1rem" }}
        label={"Income Name"}
        value={incomeLabel}
        onChange={changeHandler}
      />
      <div className="input-prev">
        <ArrowCircleLeftIcon color={"success"} onClick={redirectToStatus} />
      </div>
      <div className="input-next">
        <ArrowCircleRightIcon color={"success"} onClick={redirectToIncomeFrequency} />
      </div>
    </div>
  );
};

// TODO: for nextHandler, after all income properties have been set,
//   if there is an income at state.incomes[id+1]
//   redirect to /incomes/id+1
//   else redirect to /report
export default IncomeLabel;
