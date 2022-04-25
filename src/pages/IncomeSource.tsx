// External function/data imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";

// Internal function/data imports
import {
  selectIncomeSource,
  updateIncomeSource,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
import NavButtons from "../components/NavButtons";

// setup
type incomeIdStringParams = {
  incomeIdString?: string;
}

const IncomeSource = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString }: incomeIdStringParams = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const source = useSelector(selectIncomeSource(incomeId)) || '';

  const [radioChecked, setRadioChecked] = React.useState(false);

  const changeHandler = (event: any) => {
    const newSource = event.target.value;
    dispatch(updateIncomeSource({ incomeId, source: newSource }));
    setRadioChecked(true);
    if (newSource === "salary") {
      redirectToSalary();
    } else if (newSource === "pay") {
      redirectToPay();
    }
  };
  const redirectToFrequency = () => {
    navigate(
      `${ROUTES.INCOMES_ROUTE}/${incomeId}/frequency`
    );
  };
  const redirectToSalary = () => {
    navigate(
      `${ROUTES.INCOMES_ROUTE}/${incomeId}/salary`
    );
  };
  const redirectToPay = () => {
    navigate(
      `${ROUTES.INCOMES_ROUTE}/${incomeId}/pay`
    );
  };

  return (
    <div className="input-source">
      <FormControl>
        <FormLabel id="controlled-radio-buttons-group">
          I know my...
        </FormLabel>
        <div className="input-income-source">
          <RadioGroup
            aria-labelledby="controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={source}
            onChange={changeHandler}
          >
            <FormControlLabel
              value="salary"
              checked={source === "salary" && radioChecked}
              control={<Radio />}
              label="Salary"
            />
            <FormControlLabel
              value="pay"
              checked={source === "pay" && radioChecked}
              control={<Radio />}
              label="Pay"
            />
          </RadioGroup>
        </div>
      </FormControl>
    <NavButtons
      prevHandler={redirectToFrequency}
    />
    </div>
  )
};

export default IncomeSource;
