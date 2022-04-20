import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Year from './pages/Year'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.YEAR_ROUTE} element={<Year />} />

            </Routes>
        </Router>
    )
}

export default RootComponent
