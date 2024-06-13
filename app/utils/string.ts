function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function snakeCase(str: string) {
  return str.replace(/[A-Z]/g, (letter) => letter.toLowerCase()).replace(/\s/g, '_')
}

function pluralizeY(str: string) {
  return str.replace(/y$/, 'ies')
}

export { capitalize, snakeCase, pluralizeY }
