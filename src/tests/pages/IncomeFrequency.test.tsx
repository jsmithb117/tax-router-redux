// External function/data imports
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';


// External Component imports
// Internal function/data imports
import { store } from '../../store/store';
import anim from '../../resources/animation-delay';

// Internal Component imports
import IncomeFrequency from '../../pages/IncomeFrequency';

// setup
const setup = () => {
  const history = createMemoryHistory();
  history.push('/incomes/0/frequency');
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <IncomeFrequency />
        </Router>
      </Provider>
    )
  };
};

test('Year', async () => {
  // setup
  const { user, history } = setup();

  // user clicks Select for Frequency
  await user.click(screen.getByRole('button'));
  // 'Weekly' should have 2 instances (one hidden)
  expect(screen.getAllByText('Weekly')).toHaveLength(2);
  // Other options should have 1 hidden instance
  expect(screen.getByText('Every other week')).toBeInTheDocument();
  expect(screen.getByText('Twice a month')).toBeInTheDocument();
  expect(screen.getByText('Monthly')).toBeInTheDocument();

  // user clicks 'Every other week' to test if it changes
  await user.click(screen.getByText('Every other week'));
  // 'Every other week' should have 2 instances (one hidden)
  expect(screen.getAllByText('Every other week')).toHaveLength(2);
  // Other options should have 1 hidden instance
  expect(screen.getByText('Weekly')).toBeInTheDocument();
  expect(screen.getByText('Twice a month')).toBeInTheDocument();
  expect(screen.getByText('Monthly')).toBeInTheDocument();

  // user clicks Select for Frequency
  await user.click(screen.getByRole('button'));
  // user clicks 'Twice a month' to test if it changes
  await user.click(screen.getByText('Twice a month'));
  // 'Twice a month' should have 2 instances (one hidden)
  expect(screen.getAllByText('Twice a month')).toHaveLength(2);
  // Other options should have 1 hidden instance
  expect(screen.getByText('Weekly')).toBeInTheDocument();
  expect(screen.getByText('Every other week')).toBeInTheDocument();
  expect(screen.getByText('Monthly')).toBeInTheDocument();

  // user clicks Select for Frequency
  await user.click(screen.getByRole('button'));
  // user clicks 'Monthly' to test if it changes
  await user.click(screen.getByText('Monthly'));
  // 'Monthly' should have 2 instances (one hidden)
  expect(screen.getAllByText('Monthly')).toHaveLength(2);
  // Other options should have 1 hidden instance
  expect(screen.getByText('Weekly')).toBeInTheDocument();
  expect(screen.getByText('Every other week')).toBeInTheDocument();
  expect(screen.getByText('Twice a month')).toBeInTheDocument();

  // prev button should redirect to '/incomes/0/label'
  await user.click(screen.getByTestId('prev'));
  await new Promise(resolve => setTimeout(resolve, anim.out));
  expect(history.location.pathname).toBe('/incomes/0/label');

  // next button should redirect to '/incomes/0/source'
  await user.click(screen.getByTestId('next'));
  await new Promise(resolve => setTimeout(resolve, anim.out));
  expect(history.location.pathname).toBe('/incomes/0/source');
});