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
import Year from '../../pages/Year'

// setup
const setup = () => {
  const history = createMemoryHistory()
  history.push('/year')
  return {
    user: userEvent.setup(),
    history,
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Year />
        </Router>
      </Provider>
    )
  }
}

test('Year', async () => {
  // setup
  const { user, history } = setup()
  // user clicks Select for Tax Year
  await user.click(screen.getByRole('button'))
  // user clicks 2022 to test if it changes
  await user.click(screen.getByText('2022'))
  // 2022 should have 2 instances (one hidden)
  expect(screen.getAllByText('2022')).toHaveLength(2)
  // 2021 should have 1 hidden instance
  expect(screen.getByText('2021')).toBeInTheDocument()
  // click button again
  await user.click(screen.getByRole('button'))
  // select 2021 to test if it changes
  await user.click(screen.getByText('2021'))
  // 2021 should have 2 instances (one hidden)
  expect(screen.getAllByText('2021')).toHaveLength(2)
  // 2022 should have 1 hidden instance
  expect(screen.getByText('2022')).toBeInTheDocument()
  // pathname should be '/year'
  expect(history.location.pathname).toBe('/year')

  // prev button should should be disabled on Year component
  await user.click(screen.getByTestId('prev'))
  // needs delay to wait for animation to complete
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/year')

  // next button should redirect to /status
  await user.click(screen.getByTestId('next'))
  // needs delay to wait for animation to complete
  await new Promise((r) => setTimeout(r, anim.out))
  expect(history.location.pathname).toBe('/status')
})