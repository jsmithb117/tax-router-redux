import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'
import i404 from '../assets/I404.png';
import Button from '@mui/material/Button';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.HOMEPAGE_ROUTE)
    }

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 className="not-found-text" style={{ fontSize: '4em' }}>Oops, we ended up on Interstate 404!</h1>
            <img className="404-image" src={i404} alt="404, page not found" height="100" />
            <Button variant="outlined" onClick={() => redirectToHomePage()}>Get me off the 404!</Button>
        </div>
    )
}

export default NotFoundPage
