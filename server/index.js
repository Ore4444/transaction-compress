const express = require('express')
const app = express()
const port = 3000

app.get('/add', (req, res) => {
  console.log('REQ: ' , req.body)  

  const resp = 'Correct!'
  res.send(resp)

  console.log('RESP:' , resp)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})