import { FormatOptions } from './types'

export function formatJson(
  input: string,
  options: FormatOptions = {}
): string {
  const indent = options.indent ?? 2
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed, null, indent)
}

export function minifyJson(input: string): string {
  const parsed = JSON.parse(input)
  return JSON.stringify(parsed)
}


