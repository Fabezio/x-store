const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/userService')

router.get('/register', (req, res) => {
  return res.render('register', { message: null })
})
router.post(async (req, res) => {
  try {
    const user = await addUser(req.body)
    return res.render('register', { message: 'registration successful!' })
  } catch (err) {
    console.log(err)
    return res.render('register', { message: 'something went wrong...' })
  }
  // let message
})

module.exports = { router }
