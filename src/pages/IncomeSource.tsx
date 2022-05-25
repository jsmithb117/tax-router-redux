// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router';

// External Component imports
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Fade from 'react-reveal/Fade';

// Internal function/data imports
import {
  selectIncomeSource,
  updateIncomeSource,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants';
import anim from "../resources/animation-delay";

// Internal Component imports
import NavButtons from "../components/NavButtons";

// setup

const IncomeSource = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incomeIdString = useLocation().pathname.split('/')[2];
  const incomeId = parseInt(incomeIdString);

  const source = useSelector(selectIncomeSource(incomeId)) || '';

  const [radioChecked, setRadioChecked] = useState(false);
  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);
  const changeHandler = (event: any) => {
    const newSource = event.target.value;
    dispatch(updateIncomeSource({ incomeId, source: newSource }));
    setRadioChecked(true);
  };
  const redirectToFrequency = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(
        `${ROUTES.INCOMES_ROUTE}/${incomeId}/frequency`
      );
    }, anim.out);
  };
  const redirectToSalary = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(
        `${ROUTES.INCOMES_ROUTE}/${incomeId}/salary`
      );
    }, anim.out);
  };
  const redirectToPay = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(
        `${ROUTES.INCOMES_ROUTE}/${incomeId}/pay`
      );
    }, anim.out);
  };
  const nextHandlerCreator = () => {
    if (radioChecked && source === 'salary') {
      return () => {
        redirectToSalary();
      };
    } else if (radioChecked && source === 'pay') {
      return () => {
        redirectToPay();
      };
    } else {
      return () => {};
    }
  };

  const salaryChecked = radioChecked && source === 'salary';
  const payChecked = radioChecked && source === 'pay';

  return (
    <div className="input-source">
      <Fade left opposite when={show}>
        <FormControl>
          <FormLabel id="controlled-radio-buttons-group">
            I know my...
          </FormLabel>
          <div className="input-income-source">
            <RadioGroup
              aria-labelledby="controlled-radio-buttons-group"
              name={`controlled-radio-buttons-group-${source}`}
              value={source}
              onChange={changeHandler}
            >
              <FormControlLabel
                value="salary"
                checked={salaryChecked}
                control={<Radio
                  value="salary"
                  inputProps={{
                    "aria-label": "salary",
                  }}
                />}
                label="Salary"
              />
              <FormControlLabel
                value="pay"
                checked={payChecked}
                control={<Radio
                  value="pay"
                  inputProps={{
                    "aria-label": "pay",
                  }}
                />}
                label="Pay"
              />
            </RadioGroup>
          </div>
        </FormControl>
        <NavButtons
          prevHandler={redirectToFrequency}
          nextHandler={nextHandlerCreator()}
        />
      </Fade>
    </div>
  );
};

export default IncomeSource;
