const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.post('/log', (req, res) => {
  console.log('Request:\n' , req.body)  
  console.log('Response Status' , res.statusCode, '\n===\n')

  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})