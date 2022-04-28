import React from "react";
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../../pages/HomePage'

test('renders hello world message', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  )
  const greetings = screen.getByText(/This is not tax or financial advice/i)
  expect(greetings).toBeInTheDocument()
})
