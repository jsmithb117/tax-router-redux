// External function/data imports
import React from "react";

// External Component imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

// Internal function/data imports
// Internal Component imports
import NavButtons from "./NavButtons";

// setup

interface IProps {
  label: string;
  value: string;
  options: string[];
  dataHandler: (e: string) => void;
  prevHandler: () => void;
  nextHandler: () => void;
}
const SimpleInput = ({
  label,
  value,
  options,
  dataHandler,
  prevHandler,
  nextHandler
}: IProps) => {
  const selectLabel = `select-${label}`;

  const clickHandler = (val: string) => {
    dataHandler(val);
  };

  return (
    <div className="input-inner" >
      <InputLabel id={selectLabel} sx={{ textAlign: "center" }}>
        {label}
      </InputLabel>
      <Select
        labelId={selectLabel}
        id={selectLabel}
        value={value}
        onChange={(e) => {
          clickHandler(e.target.value);
        }}
        onClose={() => nextHandler && nextHandler()}
      >
        {options.map((option, index) => {
          return (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
      <NavButtons
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
    </div>
  );
};

export default SimpleInput;
