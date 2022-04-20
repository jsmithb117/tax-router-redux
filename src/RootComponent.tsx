import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'

import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Year from './pages/Year'
import Status from './pages/Status';
import Incomes from './pages/Incomes';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.YEAR_ROUTE} element={<Year />} />
                <Route path={ROUTES.STATUS_ROUTE} element={<Status />} />
                <Route path={ROUTES.INCOMES_ROUTE} element={<Incomes />} />

            </Routes>
        </Router>
    )
}

export default RootComponent
