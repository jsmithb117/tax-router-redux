import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from './resources/routes-constants';
import './styles/main.sass';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Year from './pages/Year';
import Status from './pages/Status';
import IncomeLabel from './pages/IncomeLabel';
import IncomeFrequency from './pages/IncomeFrequency';
import IncomeSource from './pages/IncomeSource';
import IncomePay from './pages/IncomePay';
import IncomeSalary from './pages/IncomeSalary';
import IncomeWithholding from './pages/IncomeWithholding';
import IncomeDates from './pages/IncomeDates';
import IncomeAdditional from './pages/IncomeAdditional';
import Report from './pages/Report';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
              {/*
              MegaLinter will complain about this.  It is safe to ignore.
                It is detecting duplicate code.  I could create an array of path:component pairs to create this programatically, but duplicating the code is much more human readable.
              */}
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.YEAR_ROUTE} element={<Year />} />
                <Route path={ROUTES.STATUS_ROUTE} element={<Status />} />
                <Route path={ROUTES.INCOMES_LABEL_ROUTE} element={<IncomeLabel />} />
                <Route path={ROUTES.INCOMES_FREQUENCY_ROUTE} element={<IncomeFrequency />} />
                <Route path={ROUTES.INCOMES_SOURCE} element={<IncomeSource />} />
                <Route path={ROUTES.INCOMES_PAY} element={<IncomePay />} />
                <Route path={ROUTES.INCOMES_SALARY} element={<IncomeSalary />} />
                <Route path={ROUTES.INCOMES_WITHHOLDING} element={<IncomeWithholding />} />
                <Route path={ROUTES.INCOMES_DATES} element={<IncomeDates />} />
                <Route path={ROUTES.INCOMES_ADDITIONAL} element={<IncomeAdditional />} />
                <Route path={ROUTES.REPORT} element={<Report />} />
            </Routes>
        </Router>
    );
};

export default RootComponent;
