// External function/data imports
import React from "react";

// External Component imports
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

// setup
interface IDollarInputProps {
  label: string;
  value: number;
  dataHandler: (value: number) => void;
}

const DollarInput = ({ label, value, dataHandler }: IDollarInputProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dataHandler(parseInt(e.target.value.replaceAll(',', '')));
  };

  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          value={value.toLocaleString()}
          onChange={changeHandler}
          startAdornment={
            <InputAdornment position="start">$</InputAdornment>
          }
          label={"label"}
        />
      </FormControl>
    </>
  )
};

export default DollarInput;
