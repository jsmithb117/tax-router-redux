import React from "react";

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

type NavButtonsProps = {
  prevHandler?: (() => void) | undefined;
  nextHandler?: (() => void) | undefined;
}

type Colors = "disabled" | "success";

const NavButtons = ({ prevHandler, nextHandler }: NavButtonsProps) => {
  const prevColor: Colors = prevHandler ? "success" : "disabled";
  const nextColor: Colors = nextHandler ? "success" : "disabled";

  return (
    <div className="input-buttons">
      <div className="input-prev">
        <ArrowCircleLeftIcon color={prevColor} onClick={prevHandler} />
      </div>
      <div className="input-next">
        <ArrowCircleRightIcon color={nextColor} onClick={nextHandler} />
      </div>
    </div>
  )
};

export default NavButtons;
