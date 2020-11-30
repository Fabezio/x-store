const express = require('express')
const router = express.Router()

router.get('/register', (req,res) => {
    return res.render('register', { message: null })
})
router.post(async (req, res) => {
    // let message

    return res.render('register', { message: 'registration successful!' })
  })

module.exports = { router }
