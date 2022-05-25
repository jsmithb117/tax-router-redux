import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom';

import HomePage from '../../pages/HomePage';
test('HomePage', async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <HomePage />
    </Router>,
  );
  expect(screen.getByText(/This is not tax or financial advice./i)).toBeInTheDocument();

  const user = userEvent.setup();
  const button = screen.getByText(/Start estimating my taxes/i);
  expect(button).toBeInTheDocument();
  await user.click(button);
  expect(history.location.pathname).toBe('/year');
});