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
import IncomeSalary from '../../pages/IncomeSalary';

// setup
const setup = () => {
  const history = createMemoryHistory();
  history.push('/incomes/0/salary');
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <IncomeSalary />
        </Router>
      </Provider>
    )
  };
};

describe('IncomeSalary', () => {
  test('', async () => {
    const { user, history } = setup();

    // textbox should start with text "0"
    const salary = screen.getByRole('textbox');
    expect(salary).toHaveValue('0');

    // type test message that should convert to a number
    await user.type(salary, '100000');
    expect(salary).toHaveValue('100,000');

    // clear textbox
    await userEvent.clear(salary);
    expect(salary).toHaveValue('0');

    // type test message that should not convert to a number
    await user.type(salary, 'testLetters');
    expect(salary).toHaveValue('0');

    // clear textbox
    await userEvent.clear(salary);
    expect(salary).toHaveValue('0');

    // type test message that should convert to a number
    await user.type(salary, '1000000');
    expect(salary).toHaveValue('1,000,000');

    // prev button should redirect to /incomes/0/source
    //   the way setup is written, it will not actually redirect,
    //   but it should modify the history object with the appropriate URL
    await user.click(screen.getByTestId('prev'));
    await new Promise((r) => setTimeout(r, anim.out));
    expect(history.location.pathname).toBe('/incomes/0/source');

    // next button should redirect to /incomes/0/withholding
    await user.click(screen.getByTestId('next'));
    await new Promise((r) => setTimeout(r, anim.out));
    expect(history.location.pathname).toBe('/incomes/0/withholding');
  });
});
