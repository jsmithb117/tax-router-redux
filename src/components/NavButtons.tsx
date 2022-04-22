// External function/data imports
import React from "react";

// External Component imports
import Stack from "@mui/material/Stack";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

// setup
type NavButtonsProps = {
  prevHandler?: (() => void) | undefined;
  nextHandler?: (() => void) | undefined;
}

const NavButtons = ({ prevHandler, nextHandler }: NavButtonsProps) => {
  const prevColor = prevHandler ? "success" : "disabled";
  const nextColor = nextHandler ? "success" : "disabled";

  return (
    <div className="input-buttons">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        <div className="input-prev">
          <ArrowCircleLeftIcon color={prevColor} onClick={prevHandler} />
        </div>
        <div className="input-next">
          <ArrowCircleRightIcon color={nextColor} onClick={nextHandler} />
        </div>
      </Stack>
    </div>
  )
};

export default NavButtons;
