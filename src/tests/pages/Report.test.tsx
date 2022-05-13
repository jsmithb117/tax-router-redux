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

// Internal Component imports
import Report from '../../pages/Report'

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
          <Report />
        </Router>
      </Provider>
    )
  }
}

describe('Report', () => {
  test('should report all zeroes by default', () => {
    setup()
    const reportText = screen.getByRole('heading', {  name: /report/i});
    const income = screen.getByRole('heading', {  name: /total estimated income: \$0/i})
    const tax = screen.getByRole('heading', {  name: /total estimated tax liability: \$0\.00/i})
    const withheld = screen.getByRole('heading', {  name: /total estimated withheld: \$0/i})
    const savings = screen.getByRole('heading', {  name: /total savings required: \$0\.00/i})
    const savingsPerPeriod = screen.getByRole('heading', {  name: /estimated savings required per pay period: weekly: \$0\.00/i})
    const weekly = screen.getByText(/weekly: \$0\.00/i)

    expect(reportText).toBeInTheDocument()
    expect(income).toBeInTheDocument()
    expect(tax).toBeInTheDocument()
    expect(withheld).toBeInTheDocument()
    expect(savings).toBeInTheDocument()
    expect(savingsPerPeriod).toBeInTheDocument()
    expect(weekly).toBeInTheDocument()
  })
})
