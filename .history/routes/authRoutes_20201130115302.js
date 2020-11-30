const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/userService')

router.get('/register', (req, res) => {
  return res.render('register', { message: null })
})
router.post(async (req, res) => {
  // let message
    const user = await addUser(req.body)
  return res.render('register', { message: 'registration successful!' })
})

module.exports = { router }
