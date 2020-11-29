const express = require('express')
const bodyParser = require('body-parser')
require('./utils/db.config')
const app = express()
const ejs = require('ejs')
const User = require('./models/User')

app.set('view engine', 'ejs')
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.render('index')
})
app.use(bodyParser.urlencoded({ extended: false }))

app
  .route('/register')
  .get((req, res) => {
    return res.render('register')
  })
  .post((req, res) => {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }
    User.create(newUser, (err) => {
      clog(err || 'Form submitted!')
      return res.redirect('/')
    })
    // return res.send(req.body)
  })

const clog = console.log

const PORT = 3000 || 8080
app.listen(PORT, () => {
  clog(`listening port ${PORT}`)
  // clog(`connection to database '${db}'`)
})

module.exports = app
