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
      <Button variant="outlined" onClick={redirectToYear}>Start estimating my taxes</Button>
    </>
  )
}

export default HomePage
