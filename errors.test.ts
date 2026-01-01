import { explainJsonError } from '../src/error-explainer'
import { describe, it, expect } from 'vitest'

describe('explainJsonError', () => {
  it('explains unexpected token error', () => {
    const message = 'Unexpected token } in JSON'
    const explanation = explainJsonError(message)
    expect(explanation).toContain('Invalid character')
  })
})
