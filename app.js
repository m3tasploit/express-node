const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  console.log(req.body)
  res.json(req.body)
})

app.listen(port, function () {
  console.log('Listening on port 3000...')
})
