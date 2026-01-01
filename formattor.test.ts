import { formatJson, minifyJson } from '../src/formatter'
import { describe, it, expect } from 'vitest'

describe('formatJson', () => {
  it('formats JSON with default indent', () => {
    const input = '{"a":1}'
    const output = formatJson(input)
    expect(output).toContain('\n')
  })

  it('minifies JSON', () => {
    const input = '{ "a": 1 }'
    const output = minifyJson(input)
    expect(output).toBe('{"a":1}')
  })
})
