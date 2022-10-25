export const log = (...messages: string[]) => {
  console.log(...messages)
}

export const logServer = (...messages: string[]) => {
  fetch('/log', {method: 'POST', headers: {"Content-Type": "application/json"},
  body: JSON.stringify(messages)})
}

export const objectsDataToCsvURI = (data: Array<{[key: string]: string | number}>) => encodeURI(
  `data:text/csv;charset=utf-8,${
    data.map((row, index) =>  Object.values(row).join(',')).join(`\n`)
  }`
);