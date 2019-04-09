import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard'

describe('Testing Dashboard', () => {
    it('Display renders successfully', () => {
        render(<Dashboard />)
    })

    it('Dashboard buttons are displaying', () => {
  const { getByText } = render(<Dashboard />)
  getByText(/strike/i)
  getByText(/foul/i)
  getByText(/ball/i)
  getByText(/hit/i)
})
})