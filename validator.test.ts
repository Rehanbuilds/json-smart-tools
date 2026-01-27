import { validateJson } from '../src/validator'
import { describe, it, expect } from 'vitest'

describe('validateJson', () => {
  it('returns valid for correct JSON', () => {
    const result = validateJson('{"a":1}')
    expect(result.valid).toBe(true)
  })

  it('returns error for invalid JSON', () => {
    const result = validateJson('{a:1}')
    expect(result.valid).toBe(false)
    expect(result.message).toBeDefined()
  })
})


