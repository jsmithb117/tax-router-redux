import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';

test('renders error message', () => {
    render(
        <Router>
            <NotFoundPage />
        </Router>
    );
    const errorMessage = screen.getByText("Oops, we ended up on Interstate 404!");
    expect(errorMessage).toBeInTheDocument();
});
