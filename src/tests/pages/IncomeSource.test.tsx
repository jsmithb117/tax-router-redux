// External function/data imports
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'

// External Component imports
// Internal function/data imports
import { store } from '../../store/store'
import anim from '../../resources/animation-delay'

// Internal Component imports
import IncomeSource from '../../pages/IncomeSource'

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
          <IncomeSource />
        </Router>
      </Provider>
    )
  }
}

describe('Status', () => {
  test('should redirect when prev button is pressed', async () => {
    const { user, history } = setup()
    // prev button should redirect to /incomes/0/frequency
    //   the way setup is written, it will not actually redirect,
    //   but it should modify the history object with the appropriate URL
    await user.click(screen.getByTestId('prev'))
    // needs delay to wait for animation to complete
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/0/frequency')
  })
  test('should not redirect when next button is pressed if a source is not selected', async () => {
    const { user, history } = setup()

    // next button should not redirect
    await user.click(screen.getByTestId('next'))
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/0/label')
  })
  test('should redirect when next button is pressed after source is selected', async () => {
    const { user, history } = setup()

    // user clicks pay
    await user.click(screen.getByLabelText('pay'))
    await new Promise((r) => setTimeout(r, anim.out))

    // next button should redirect to /incomes/0/pay
    await user.click(screen.getByTestId('next'))
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/0/pay')

    // user clicks salary
    await user.click(screen.getByLabelText('salary'))
    await new Promise((r) => setTimeout(r, anim.out))

    // next button should redirect to /incomes/0/salary
    await user.click(screen.getByTestId('next'))
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/0/salary')
  })
  test('should check buttons that are clicked', async () => {
    const { user } = setup()

    const salary = screen.getByLabelText('salary')
    const pay = screen.getByLabelText('pay')

    // user clicks pay
    await user.click(pay)

    expect(salary).not.toBeChecked()
    expect(pay).toBeChecked()

    // user clicks pay
    await user.click(salary)

    expect(salary).toBeChecked()
    expect(pay).not.toBeChecked()
  })
})
