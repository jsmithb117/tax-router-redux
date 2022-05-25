// External function/data imports
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/dom';

// External Component imports
// Internal function/data imports
import { store } from '../../store/store';
import anim from '../../resources/animation-delay';

// Internal Component imports
import IncomeDates from '../../pages/IncomeDates';

// setup
const setup = () => {
  const history = createMemoryHistory();
  history.push('/incomes/0/dates');
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <IncomeDates />
        </Router>
      </Provider>
    )
  };
};

describe('IncomeDates', () => {
  test('should render buttons', () => {
    setup();
    const fullYearButton = screen.getByRole('button', { name: 'All Year' });
    const partialYearButton = screen.getByRole('button', { name: 'Partial Year' });
    expect(fullYearButton).toBeInTheDocument();
    expect(partialYearButton).toBeInTheDocument();
  });
  test('should not render startDate or endDate on inital page render', () => {
    setup();
    expect(screen.queryByRole('textbox', { name: 'Start Date' })).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox', { name: 'End Date' })).not.toBeInTheDocument();
  });

  test('should redirect to /incomes/0/additional when all year is clicked', async () => {
    const { user, history } = setup();
    const fullYearButton = screen.getByRole('button', { name: 'All Year' });
    await user.click(fullYearButton);
    await new Promise((r) => setTimeout(r, anim.out));
    expect(history.location.pathname).toBe('/incomes/0/additional');
  });
  test('should open startDate picker when partial year is clicked', async () => {
    const { user } = setup();
    const partialYearButton = screen.getByRole('button', { name: 'Partial Year' });
    await user.click(partialYearButton);
    expect(screen.queryByRole('textbox', { name: 'Start Date' })).toBeInTheDocument();
  });

  test('should open endDate picker when a date is entered into startDate', async () => {
    const { user } = setup();
    const partialYearButton = screen.getByRole('button', { name: 'Partial Year' });
    await user.click(partialYearButton);
    const startBox = screen.getByRole('textbox', { name: 'Start Date' });
    await user.type(startBox, '01/01/2021{tab}{Enter}{Escape}');
    const endBox = screen.getAllByTestId('CalendarIcon')[1];
    expect(endBox).toBeInTheDocument();
  });

  test('should redirect to /incomes/0/additional after endDate is entered and next button is clicked', async () => {
    const { user, history } = setup();

    const partialYearButton = screen.getByRole('button', { name: 'Partial Year' });
    await user.click(partialYearButton);
    const startBox = screen.getByRole('textbox', { name: 'Start Date' });
    await user.type(startBox, '01/01/2021{tab}{Enter}{Escape}');
    const endBox = screen.getByRole('textbox', { name: 'End Date' });
    await user.type(endBox, '12/31/2021{tab}{Enter}{Escape}');
    await user.click(screen.getByTestId('next'));
    await new Promise((r) => setTimeout(r, anim.out + 100));
    await waitFor(() => {
      expect(history.location.pathname).toBe('/incomes/0/additional');
    });
  });

  test('should redirect to /incomes/0/withholding when prev button is clicked', async() =>{
    const { user, history } = setup();
    await user.click(screen.getByTestId('prev'));
    await new Promise((r) => setTimeout(r, anim.out + 100));
    await waitFor(() => {
      expect(history.location.pathname).toBe('/incomes/0/withholding');
    });
  });
});
