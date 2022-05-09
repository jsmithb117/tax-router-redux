// External function/data imports
import React from 'react'
import { Router, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
// import { BrowserRouter } from 'react-router-dom'

// External Component imports
// Internal function/data imports
import { store } from '../../store/store'
import anim from '../../resources/animation-delay'

// Internal Component imports
import IncomeLabel from '../../pages/IncomeLabel'

// setup
const setup = () => {
  const history = createMemoryHistory()
  history.push('/incomes/0/label')
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <IncomeLabel />
        </Router>
      </Provider>
    )
  }
}

test('Status', async () => {
  const { user, history } = setup()

  // textbox should start with text "Income 1"
  const incomeLabel = screen.getByRole('textbox')
  expect(incomeLabel).toHaveValue('Income 1')

  // clear textbox
  await userEvent.clear(incomeLabel)
  expect(incomeLabel).toHaveValue('')

  // type test message
  await user.type(incomeLabel, 'test')
  expect(incomeLabel).toHaveValue('test')

  // prev button should redirect to /status
  //   the way setup is written, it will not actually redirect,
  //   but it should modify the history object with the appropriate URL
  await user.click(screen.getByTestId('prev'))
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/status')

  // next button should redirect to /incomes/0/frequency
  await user.click(screen.getByTestId('next'))
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/incomes/0/frequency')

  // TODO: test for /incomes/1/frequency
  //   should redirect to /incomes/0/date
})

