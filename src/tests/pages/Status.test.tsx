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
import Status from '../../pages/Status'

// setup
const setup = () => {
  const history = createMemoryHistory()
  history.push('/status')
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Status />
        </Router>
      </Provider>
    )
  }
}

test('Status', async () => {
  // setup
  const { user, history } = setup()

  // user clicks Select for Tax Status
  await user.click(screen.getByRole('button'))
  // user clicks next option to test if it changes
  await user.click(screen.getByText('Head of Household'))
  // Head of Household should have 2 instances (one hidden), all others should have one hidden instance
  expect(screen.getAllByText('Head of Household')).toHaveLength(2)
  expect(screen.getByText('Single')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Jointly')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Separately')).toBeInTheDocument()

  // Married Filing Jointly
  await user.click(screen.getByRole('button'))
  await user.click(screen.getByText('Married Filing Jointly'))
  expect(screen.getAllByText('Married Filing Jointly')).toHaveLength(2)
  expect(screen.getByText('Single')).toBeInTheDocument()
  expect(screen.getByText('Head of Household')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Separately')).toBeInTheDocument()

  // Married Filing Separately
  await user.click(screen.getByRole('button'))
  await user.click(screen.getByText('Married Filing Separately'))
  expect(screen.getAllByText('Married Filing Separately')).toHaveLength(2)
  expect(screen.getByText('Single')).toBeInTheDocument()
  expect(screen.getByText('Head of Household')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Jointly')).toBeInTheDocument()

  // Single
  await user.click(screen.getByRole('button'))
  await user.click(screen.getByText('Single'))
  expect(screen.getAllByText('Single')).toHaveLength(2)
  expect(screen.getByText('Head of Household')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Jointly')).toBeInTheDocument()
  expect(screen.getByText('Married Filing Separately')).toBeInTheDocument()

  expect(history.location.pathname).toBe('/status')

  // prev buton should redirect to /year
  await user.click(screen.getByTestId('prev'))
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/year')

  // next button should redirect to /incomes/0/label
  await user.click(screen.getByTestId('next'))
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/incomes/0/label')
})