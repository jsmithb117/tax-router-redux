// External function/data imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";


// External Component imports
import TextField from "@mui/material/TextField";

// Internal function/data imports
import {
  updateIncomeLabel,
  selectIncomeLabel,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import NavButtons from "../components/NavButtons";

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
      <NavButtons
        prevHandler={redirectToStatus}
        nextHandler={redirectToIncomeFrequency}
      />
    </div>
  );
};

export default IncomeLabel;
