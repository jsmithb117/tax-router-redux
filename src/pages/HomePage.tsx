// External function/data imports
import React from 'react'
import { useNavigate } from 'react-router-dom'

// External Component imports
import Button from '@mui/material/Button';

// Internal function/data imports
import { ROUTES } from '../resources/routes-constants'

// Internal Component imports
// setup

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const redirectToYear = () => {
    navigate(ROUTES.YEAR_ROUTE);
  }

  return (
    <>
      <h4>
        This is not tax or financial advice. It is a tool to help you estimate your taxes.
      </h4>
      <h4>
        Jay is not a tax professional, just a guy that loves to code.
      </h4>
      <Button variant="outlined" onClick={redirectToYear}>Start estimating my taxes</Button>
    </>
  )
}

export default HomePage
