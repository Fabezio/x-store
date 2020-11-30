const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require("./routes/authRoutes")
require('./utils/db.config')
const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index')
})
app.use(bodyParser.urlencoded({ extended: false }))


  

const clog = console.log

const PORT = 3000 || 8080
app.listen(PORT, () => {
  clog(`listening port ${PORT}`)
  // clog(`connection to database '${db}'`)
})

module.exports = app
