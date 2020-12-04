const express = require('express')
const session = require('express-session')
const app = express()
const bodyParser = require('body-parser')
require('./utils/db.config')
const ejs = require('ejs')
const apiUsersRouter = require('./routes/apiUserRoutes')
// const { RuleTester } = require('eslint')

// User Authentication
const authRoutes = require('./routes/authRoutes')
const passport = require('passport')
require('./utils/authStrategies/localStrategy')
app.use(passport.initialize())
app.use(passport.session())

// session config
// app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

// ejs config
app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  // const username = req.session.name
  // const views = req.session.views
  req.session.views = (req.session.views || 0) + 1
  console.log('user:', req.user)
  // console.log(views)
  // if (!username) username = 'Fabezio'
  res.render('index', {
    name: req.user || 'pretty unknown user',
    views: req.session.views
  })
})
app.get('/login-success', (req, res) => {
  return res.render('login-success')
})
app.get('/login-failed', (req, res) => {
  return res.render('login-failed')
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
