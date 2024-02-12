import Home from '../../src/pages/Home'
import React from 'react'

describe('Testing Home page', () => {
  it('renders correctly', () => {
    renderWithStore(wrapWithTheme(<Home />))
  })

  it('start with 0', () => {
    const { getByText } = renderWithStore(wrapWithTheme(<Home />))
    const value = getByText('0')

    expect(value).not.toBeNull()
  })
})
