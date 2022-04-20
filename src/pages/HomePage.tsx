import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../resources/routes-constants'

// import DateDisplay from '../components/DateDisplay'
import Button from '@mui/material/Button';


const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const redirectToYear = () => {
    navigate(ROUTES.YEAR_ROUTE);
  }

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>{"Jay's Tax Estimator"}</h1>
            <Button variant="outlined" onClick={redirectToYear}>Start estimating my taxes</Button>
        </div>
    )
}

export default HomePage
