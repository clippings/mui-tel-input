import React from 'react'
import { expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { putCursorAtEndOfInput } from '../dom'
import '@testing-library/jest-dom'

describe('helpers/dom', () => {
  describe('putCursorAtEndOfInput', () => {
    it('should have the correct selectionStart', () => {
      render(<input defaultValue="Hello" />)
      const element: HTMLInputElement = screen.getByRole('textbox')
      element.setSelectionRange(0, 0)
      putCursorAtEndOfInput(element)
      expect(element.selectionStart).toBe(5)
    })
  })
})
