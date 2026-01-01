# json-smart-tools
Lightweight TypeScript toolkit for JSON formatting, validation, and human-friendly error explanations. Zero dependencies.
# JSON Smart Tools

Lightweight TypeScript utilities for JSON formatting, validation, and error explanation.

## Features
- Format JSON
- Minify JSON
- Validate JSON
- Explain common JSON errors
- Zero dependencies

## Install
npm install json-smart-tools

## Usage
```ts
import { formatJson } from 'json-smart-tools'

formatJson('{"a":1}', { indent: 2 })
