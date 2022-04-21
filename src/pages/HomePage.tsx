import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../resources/routes-constants'

import Button from '@mui/material/Button';


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
