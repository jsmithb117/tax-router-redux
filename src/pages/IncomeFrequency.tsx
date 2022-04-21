import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { selectIncomeFrequency, selectIncomeFrequencyLookup, selectIncomeFrequencyOptions, updateFrequency } from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import { getKeyValue } from "../utility/functions";


type incomeIdStringParams = {
  incomeIdString?: string;
}

const IncomeFrequency = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString }: incomeIdStringParams = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const frequency = useSelector(selectIncomeFrequency(incomeId));
  const lookupTable = useSelector(selectIncomeFrequencyLookup);
  const options = useSelector(selectIncomeFrequencyOptions);

  const changeHandler = (event: any) => {
    dispatch(updateFrequency({incomeId, frequency: getKeyValue(lookupTable, event.target.value)}));
  };

  const redirectToLabel = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/label");
  };
  const redirectToIncomeSource = () => {
    navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/incomesource");
  };

  return (
    <div className="input-frequency">
      <InputLabel id="simple-select-label">Income Frequency</InputLabel>
      <Select
        labelId="simple-select-label"
        id="simple-select"
        value={getKeyValue(lookupTable, frequency)}
        onChange={changeHandler}
      >
        {options.map((option: any) => {
          return (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
      <div className="input-prev">
        <ArrowCircleLeftIcon color={"success"} onClick={redirectToLabel} />
      </div>
      <div className="input-next">
        <ArrowCircleRightIcon color={"success"} onClick={redirectToIncomeSource} />
      </div>
    </div>
  );
};

export default IncomeFrequency;
