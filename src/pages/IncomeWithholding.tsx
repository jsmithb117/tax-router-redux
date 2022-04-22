import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { ROUTES } from '../resources/routes-constants'
import {
  updateWithholding,
  selectWithholding,
  selectIncomeSource,
} from "../store/slices/incomesSlice";

import NavButtons from "../components/NavButtons";

const IncomeWithholding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");
  const withholding = useSelector(selectWithholding(incomeId));
  const incomeSource = useSelector(
    selectIncomeSource(incomeId)
  );


  const changeHandler = (e: any) => {
    const withholding = e.target.value;
    dispatch(
      updateWithholding({ incomeId, withholding })
    );
  };
  const redirectToSource = () => {
    if (incomeSource === "salary") {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/salary");
    } else if (incomeSource === "pay") {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/pay");
    }
  };
  const redirectToIncomeDates = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/dates");
  };
  return (
    <div className="input-income-withholding">
      <FormControl sx={{ m: 1 }}>
        <InputLabel htmlFor="component-outlined">Withholding</InputLabel>
        <OutlinedInput
          value={withholding}
          onChange={changeHandler}
          startAdornment={
            <InputAdornment position="start">$</InputAdornment>
          }
          label={"label"}
        />
      </FormControl>
      <NavButtons
        prevHandler={redirectToSource}
        nextHandler={redirectToIncomeDates}
      />
    </div>
  )
};

export default IncomeWithholding;
