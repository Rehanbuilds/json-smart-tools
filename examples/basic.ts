import {
  formatJson,
  minifyJson,
  validateJson,
  explainJsonError
} from '../src'

const raw = '{ "name": "Rehan", "tool": "Snippetly" }'

const formatted = formatJson(raw, { indent: 4 })
console.log(formatted)

const minified = minifyJson(raw)
console.log(minified)

const validation = validateJson('{ invalid json }')
if (!validation.valid) {
  console.log(explainJsonError(validation.message!))
}
