// External function/data imports
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

// External Component imports
import Fade from "react-reveal/Fade";

// Internal function/data imports
import {
  addIncome,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import anim from "../resources/animation-delay";

// Internal Component imports
import TwoButtons from "../components/TwoButtons";
import NavButtons from "../components/NavButtons";

// setup

const IncomeAdditional = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  const button2Handler = () => {
    setShow(false);
    setTimeout(() => {
      dispatch(addIncome());
      navigate(ROUTES.INCOMES_ROUTE + "/" + (incomeId + 1) + "/label");
    }, anim.out)
  };
  const handlePrev = () => {
    setShow(false);
    setTimeout(() => {
      const conditionalId = incomeId === 0 ? 0 : incomeId - 1;
      navigate(ROUTES.INCOMES_ROUTE + "/" + (conditionalId) + "/dates");
    }, anim.out)
  };
  const handleNext = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.REPORT);
    }, anim.out)
  };

  return (
    <>
      <Fade left opposite when={show}>
        <TwoButtons
          label1="No additional incomes"
          label2="Add additional income"
          button1Handler={handleNext}
          button2Handler={button2Handler}
        />
        <NavButtons
          prevHandler={handlePrev}
          nextHandler={handleNext}
        />
      </Fade>
    </>
  )
};

export default IncomeAdditional;
