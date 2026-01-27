import { ValidationResult } from './types'

export function validateJson(input: string): ValidationResult {
  try {
    JSON.parse(input)
    return { valid: true }
  } catch (error: any) {
    return {
      valid: false,
      message: error.message
    }
  }
}




