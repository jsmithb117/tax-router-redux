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
import IncomeAdditional from '../../pages/IncomeAdditional'

// setup
const setup = () => {
  const history = createMemoryHistory()
  history.push('/incomes/0/dates')
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <IncomeAdditional />
        </Router>
      </Provider>
    )
  }
}

describe('IncomeAdditional', () => {
  test('should render buttons', () => {
    setup()
    const noAdditionalButton = screen.getByRole('button', { name: /no additional incomes/i })
    const additionalButton = screen.getByRole('button', { name: /add additional income/i })
    const prevButton = screen.getByTestId('prev')
    const nextButton = screen.getByTestId('next')
    expect(noAdditionalButton).toBeInTheDocument()
    expect(additionalButton).toBeInTheDocument()
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
  test('should redirect to /report when noAdditionalButton is clicked', async () => {
    const { user, history } = setup()
    const noAdditionalButton = screen.getByRole('button', { name: /no additional incomes/i })
    await user.click(noAdditionalButton)
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/report')
  })
  // should redirect to /incomes/1/label when additionalButton is clicked
  test('should redirect to /incomes/1/label when additionalButton is clicked', async () => {
    const { user, history } = setup()
    const additionalButton = screen.getByRole('button', { name: /add additional income/i })
    await user.click(additionalButton)
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/1/label')
  })
  // should redirect to /incomes/0/withholding when prevButton is clicked
  test('should redirect to /incomes/0/withholding when prevButton is clicked', async () => {
    const { user, history } = setup()
    const prevButton = screen.getByTestId('prev')
    await user.click(prevButton)
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/incomes/0/withholding')
    // should redirect to /report when nextButton is clicked
  })
  test('should redirect to /report when nextButton is clicked', async () => {
    const { user, history } = setup()
    const nextButton = screen.getByTestId('next')
    await user.click(nextButton)
    await new Promise((r) => setTimeout(r, anim.out))
    expect(history.location.pathname).toBe('/report')
    expect(true).toBeFalsy()
  })
})
