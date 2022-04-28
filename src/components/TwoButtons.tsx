// External function/data imports
import React from "react";

// External Component imports
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ITwoButtonsProps {
  label1: string;
  label2: string;
  button1Handler: () => void;
  button2Handler: () => void;
}

const TwoButtons = ({ label1, label2, button1Handler, button2Handler }: ITwoButtonsProps) => (
  <div className="input-two-buttons">
    <Stack
      direction="row"
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="outlined"
        onClick={button1Handler}
      >
        {label1}
      </Button>
      <Button
        variant="outlined"
        onClick={button2Handler}
      >
        {label2}
      </Button>
    </Stack>
  </div>
);

export default TwoButtons;
