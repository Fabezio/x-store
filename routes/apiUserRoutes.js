const express = require('express')
const apiUsersRouter = express.Router()
const User = require('../modules/users/models/User')

apiUsersRouter.get('/api/users', (req, res) => {
  User.find({}, (err, found) => {
    console.log(err || 'found -data')
    return res.render('api/users', { users: found })
  })
})
apiUsersRouter.get('/api/users/:id', (req, res) => {
  User.findOne({ username: req.params._id }, (err, found) => {
    console.log(err || `${found.username} found'`)
    return res.render('api/_user', { user: found })
  })
})
module.exports = apiUsersRouter
