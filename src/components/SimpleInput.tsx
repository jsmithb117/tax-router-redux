import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

type Nullable<T> = T | null;
interface Props {
  label: string;
  value: string;
  options: string[];
  dataHandler: (e: string) => void;
  prevHandler: Nullable<() => void>;
  nextHandler: Nullable<() => void>;
}
const SimpleInput = ({ label, value, options, dataHandler, prevHandler, nextHandler }: Props) => {
  const selectLabel = `select-${label}`;

  const clickHandler = (val: string) => {
    dataHandler(val);
  };

  const prevColor = prevHandler !== null ? 'success' : 'disabled';
  const nextColor = nextHandler !== null ? 'success' : 'disabled';

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
        <div className="input-prev">
          <ArrowCircleLeftIcon color={prevColor} onClick={() => {
            prevHandler && prevHandler();
          }} />
        </div>
        <div className="input-next">
        <ArrowCircleRightIcon color={nextColor} onClick={() => {
            nextHandler && nextHandler();
          }} />
        </div>
    </div>
  );
};

export default SimpleInput;
