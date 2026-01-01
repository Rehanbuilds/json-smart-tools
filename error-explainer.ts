export function explainJsonError(message: string): string {
  if (message.includes('Unexpected token')) {
    return 'Invalid character detected in JSON.'
  }

  if (message.includes('Unexpected end')) {
    return 'JSON appears to be incomplete.'
  }

  if (message.includes('Expected')) {
    return 'JSON structure is incorrect.'
  }

  return 'Invalid JSON format.'
}
