import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { store } from '../src/store'

import App from '../App'

describe('Test App component', () => {
  beforeEach(() => {
    store.dispatch({ type: 'counter/resetCounter' })
  })

  it('should render counter component with initial value', () => {
    const { getByText } = render(<App />)
    expect(getByText('0')).toBeTruthy()
  })

  it('should increment counter value after click', () => {
    const { getByLabelText } = render(<App />)
    fireEvent.press(getByLabelText('increment-button'))
    expect(getByLabelText('counter-value').children).toContain('1')
  })

  it('should decrement counter value after click', () => {
    const { getByLabelText } = render(<App />)
    fireEvent.press(getByLabelText('decrement-button'))
    expect(getByLabelText('counter-value').children).toContain('-1')
  })
})
