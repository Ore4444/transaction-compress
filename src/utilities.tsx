export const log = (...messages: string[]) => {
  console.log(...messages)
}

export const logServer = (...messages: string[]) => {
  fetch('/log', {method: 'POST', headers: {"Content-Type": "application/json"},
  body: JSON.stringify(messages)})
}