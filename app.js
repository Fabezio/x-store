const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
require('./utils/db.config')
const authRoutes = require('./routes/authRoutes')
const ejs = require('ejs')
const apiUsersRouter = require('./routes/apiUserRoutes')
const { RuleTester } = require('eslint')

// session config
const app = express()
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

// ejs config
app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  const username = req.session.name
  const views = req.session.views
  console.log(req.session)
  console.log(views)
  // if (!username) username = 'Fabezio'
  res.render('index', { name: username || 'pretty unknown user', views: views || 0 })
})
app.get('/api', (req, res) => {
  res.render('api/index')
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', authRoutes)
app.use('/', apiUsersRouter)

const clog = console.log

// port listen
const PORT = 3000 || 8080
app.listen(PORT, () => {
  clog(`listening port ${PORT}`)
  // clog(`connection to database '${db}'`)
})

module.exports = app
