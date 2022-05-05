// External function/data imports
import React from "react";

// External Component imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

// Internal function/data imports
// Internal Component imports
import NavButtons from "./NavButtons";

// setup
interface ISimpleInputProps {
  label: string;
  value: string;
  options: string[];
  dataHandler: (e: string) => void;
  prevHandler?: () => void;
  nextHandler?: () => void;
  testId?: string;
}

const SimpleInput = ({
  label,
  value,
  options,
  dataHandler,
  prevHandler,
  nextHandler
}: ISimpleInputProps) => {
  const selectLabel = `select-${label.toLowerCase().split(' ').join('-')}`;

  const clickHandler = (val: string) => {
    dataHandler(val);
  };

  return (
    <div className="input-inner">
      <FormControl>
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
          data-testid={selectLabel}
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                key={index}
                value={option}
                data-testid={option + index}
              >
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <NavButtons
        prevHandler={prevHandler}
        nextHandler={nextHandler}
      />
    </div>
  );
};

export default SimpleInput;