const express = require('express')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index')
})

const disp = console.log

app.listen(3000, () => {
  disp('server started...')
})
