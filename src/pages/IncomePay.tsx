// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
import Fade from "react-reveal/Fade";

// Internal function/data imports
import {
  selectPay,
  updatePay,
  updateSalary,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import anim from "../resources/animation-delay";

// Internal Component imports
import DollarInput from "../components/DollarInput";
import NavButtons from "../components/NavButtons";

// setup

const IncomePay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const pay = useSelector(selectPay(incomeId)) || 0;

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  const changeHandler = (pay: number) => {
    // Resets salary if pay is updated so report can infer source of income data
    dispatch(updateSalary({ incomeId, salary: 0 }));
    dispatch(updatePay({ incomeId, pay }));
  };
  const redirectToSource = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(
        `${ROUTES.INCOMES_ROUTE}/${incomeId}/source`
      );
    }, anim.out);
  };
  const redirectToWithholding = () => {
    setShow(false);
    // delay allows 'out' animation to complete prior to redirect
    setTimeout(() => {
      navigate(
        `${ROUTES.INCOMES_ROUTE}/${incomeId}/withholding`
      );
    }, anim.out);
  };

  return (
    <div className="input-income-pay">
      <Fade left opposite when={show}>
        <DollarInput
          label="Pay"
          value={pay}
          dataHandler={changeHandler}
        />
        <NavButtons
          prevHandler={redirectToSource}
          nextHandler={redirectToWithholding}
        />
      </Fade>
    </div>
  )
};

export default IncomePay;
