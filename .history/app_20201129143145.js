const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index')
})

const clog = console.log

app.listen(3000, () => {
  clog('server started...')
})
