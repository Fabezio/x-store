const express = require('express')
const bodyParser = require('body-parser')
require('./utils/db.config')
const authRoutes = require('./routes/authRoutes')
const ejs = require('ejs')
const apiUsersRouter = require('./routes/apiUserRoutes')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index')
})
app.get('/api', (req, res) => {
  res.render('api/index')
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', authRoutes)
app.use('/', apiUsersRouter)

const clog = console.log

const PORT = 3000 || 8080
app.listen(PORT, () => {
  clog(`listening port ${PORT}`)
  // clog(`connection to database '${db}'`)
})

module.exports = app
