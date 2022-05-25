// External function/data imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// External Component imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Internal function/data imports
import { ROUTES } from '../resources/routes-constants';

// Internal Component imports
// setup

const HomePage= () => {
  const navigate = useNavigate();

  const redirectToYear = () => {
    console.log('I am aware of the React errors in the Fade component.');
    navigate(ROUTES.YEAR_ROUTE);
  };

  return (
    <div className="home-text">
      <Typography
        variant="body1"
        gutterBottom
        component="div"
      >
        {"This is not tax or financial advice."}
        <br />
        {"It doesn't account for any of the tax deductions you may have. It's just a tool to help you estimate your taxes."}
        <br />
        {"Jay's not a tax professional, just a person that loves to code."}
      </Typography>
      <Button variant="outlined" onClick={redirectToYear}>Start estimating my taxes</Button>
    </div>
  );
};

export default HomePage;
