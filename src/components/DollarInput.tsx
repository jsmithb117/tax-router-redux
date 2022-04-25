import React from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const DollarInput = ({ label, value, dataHandler }: any) => {
  const changeHandler = (e: any) => {
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
