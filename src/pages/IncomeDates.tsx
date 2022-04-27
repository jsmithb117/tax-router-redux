// External function/data imports
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc'
import { parseISO } from 'date-fns';

// External Component imports
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { BrowserView, MobileView } from "react-device-detect";
import Fade from 'react-reveal/Fade';

// Internal function/data imports
import {
  updateStartDate,
  updateEndDate,
  selectStartDate,
  selectEndDate,
  selectIncomesLength,
} from "../store/slices/incomesSlice";
import { ROUTES } from '../resources/routes-constants'
import anim from "../resources/animation-delay";

// Internal Component imports
import NavButtons from "../components/NavButtons";

// setup
dayjs.extend(customParseFormat);
dayjs.extend(utc);

const IncomeDates = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { incomeIdString } = useParams();
  const incomeId = parseInt(incomeIdString || "");

  const [datesRequired, setDatesRequired] = useState(false);
  const [startDateSet, setStartDateSet] = useState(false);
  const [endDateSet, setEndDateSet] = useState(false);
  const [show, setShow] = useState(false);

  // for 'in' animation
  useEffect(() => {
    setShow(true);
  }, []);

  // Dates (and all class instances) are not directly serializeable
  //   and cannot properly be stored by Redux
  // We serialize them in the format: 'YYYY-MM-DD' prior to storing
  // Then we parse them as we select them from the store

  // We can't handle this in the store before setting it as state, redux
  //   checks for serializability before it handles and dispatches the
  //   action and will throw an error

  // TODO: This functionality belongs in
  const startDate = parseISO(useSelector(selectStartDate(incomeId)) || "");
  const endDate = parseISO(useSelector(selectEndDate(incomeId)) || "");
  const incomesLength = useSelector(selectIncomesLength);
  const partialYearHandler = () => {
    setDatesRequired(true);
  }
  const setStartDate = (date: any) => {
    // See above; We need to serialize the date prior to dispatching it to store

    // TODO: This functionality belongs in middleware
    const newStartDate = dayjs(date).utc().format('YYYY-MM-DD');
    dispatch(updateStartDate({ incomeId, startDate: newStartDate }));
    setStartDateSet(true);
  }
  const setEndDate = (date: any) => {
    // TODO: This functionality belongs in middleware
    const newEndDate = dayjs(date).utc().format('YYYY-MM-DD');
    dispatch(updateEndDate({ incomeId, endDate: newEndDate }));
    setEndDateSet(true);
  }

  const redirectToWithholding = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/withholding");
    }, anim.out);
  }
  const redirectToAdditional = () => {
    setShow(false);
    setTimeout(() => {
      navigate(ROUTES.INCOMES_ROUTE + "/" + incomeId + "/additional");
    }, anim.out);
  }
  const startDateHandler = (e: any) => {
    setStartDate(e);
  }

  const nextHandler = (() => {
    const isNotLastIncome = incomesLength > incomeId + 1;
    if (isNotLastIncome) {
      return () => {
        setShow(false);
        setTimeout(() => {
          navigate(ROUTES.INCOMES_ROUTE + "/" + (incomeId + 1) + "/label");
        }, anim.out);
      }
    } else if (startDateSet && endDateSet) {
      return () => {
        setShow(false);
        setTimeout(() => {
          redirectToAdditional();
        }, anim.out);
      };
    } else {
      return undefined;
    }
  })();

  return (
    <>
      <div className="input-income-plan">
        <Fade left opposite when={show}>
          I plan to work here...
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              onClick={redirectToAdditional}
            >
              All Year
            </Button>
            <Button
              variant="outlined"
              onClick={partialYearHandler}
            >
              Partial Year
            </Button>
          </Stack>
        </Fade>

        {datesRequired &&
          <div className="input-income-plan-start">
            <Fade left opposite when={show}>
              Enter Start Date:
              <div style={{ marginTop: 10 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <BrowserView>
                    <DesktopDatePicker
                      label="Start Date"
                      inputFormat="MM/dd/yyyy"
                      value={startDate}
                      onChange={startDateHandler}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </BrowserView>

                  <MobileView>
                    <MobileDatePicker
                      label="End Date"
                      inputFormat="MM/dd/yyyy"
                      value={startDate}
                      onChange={startDateHandler}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </MobileView>
                </LocalizationProvider>
              </div>
            </Fade>

            {startDateSet &&
              <div style={{ marginTop: 10 }}>
                <Fade left opposite when={show}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <BrowserView>
                      <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDate}
                        onChange={setEndDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </BrowserView>
                    <MobileView>
                      <MobileDatePicker
                        label="End Date"
                        inputFormat="MM/dd/yyyy"
                        value={endDate}
                        onChange={setEndDate}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </MobileView>
                  </LocalizationProvider>
                </Fade>
              </div>
            }
          </div>
        }
        <Fade left opposite when={show}>
          <NavButtons
            prevHandler={redirectToWithholding}
            nextHandler={nextHandler}
          />
        </Fade>
      </div>
    </>
  )
};

export default IncomeDates;
