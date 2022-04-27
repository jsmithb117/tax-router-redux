// External function/data imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'

// External Component imports
import Fade from 'react-reveal/Fade';

// Internal function/data imports
import { RootState } from "../store/store";
import { updateFilingYear } from "../store/slices/yearSlice";
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
import SimpleInput from "../components/SimpleInput";

// setup

const Year = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const year = useSelector((state: RootState) => state.year);

  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 150);
  }, [])
  const clickHandler = (val: string) => {
    dispatch(updateFilingYear(val));
  };
  const redirectToStatus = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.STATUS_ROUTE);
    }, 500)
  };

  return (
    <div className="input-year">
      <Fade left opposite when={show}>

        <SimpleInput
          label={"Tax Year"}
          value={year.filingYear}
          options={year.options}
          dataHandler={clickHandler}
          nextHandler={redirectToStatus}
        />
      </Fade>
    </div>
  )
}

export default Year;
