// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Fade from "react-reveal/Fade";

// Internal function/data imports
import { selectIncomeFrequency, selectIncomeFrequencyLookup, selectIncomeFrequencyOptions, updateFrequency } from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import { getKeyValue } from "../utility/functions";
import anim from "../resources/animation-delay";

// Internal Component imports
import NavButtons from "../components/NavButtons";

// setup
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

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  const changeHandler = (event: any) => {
    dispatch(updateFrequency({ incomeId, frequency: getKeyValue(lookupTable, event.target.value) }));
    redirectToIncomeSource();
  };

  const redirectToLabel = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      // navigate(ROUTES.STATUS_ROUTE);
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/label");
    }, anim.out)
  };
  const redirectToIncomeSource = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      // navigate(ROUTES.STATUS_ROUTE);
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/source");
    }, anim.out)
  };

  return (
    <div className="input-frequency">
      <Fade left opposite when={show}>
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
        <NavButtons
          prevHandler={redirectToLabel}
          nextHandler={redirectToIncomeSource}
        />
      </Fade>
    </div>
  );
};

export default IncomeFrequency;
