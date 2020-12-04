const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/userService')

const passport = require('passport')
const {
  registerSchema
} = require('../modules/users/validations/authValidation')
const {
  joiErrorFormatter,
  mongooseErrorFormatter
} = require('../utils/validationFormatter')

// registration
router.get('/register', (req, res) => {
  return res.render('register', { message: null, errors: {}, formData: {} })
})
router.post('/register', async (req, res) => {
  try {
    const validationResult = registerSchema.validate(req.body, {
      abortEarly: false
    })
    if (validationResult.error) {
      return res.render('register', {
        message: {
          type: 'error',
          body: 'Validation errors'
        },
        errors: joiErrorFormatter(validationResult.error),
        formData: req.body
      })
    } else {
      // return res.render('register', { message: 'registration successful!' })
      return res.redirect('/login', {
        message: {
          type: 'success',
          body: 'Registration success'
        },
        errors: {},
        formData: req.body
      })
    }

    // const user = await addUser(req.body)
  } catch (err) {
    console.error(err)
    /* res.send(mongooseErrorFormatter(err)) */
    /* return res
      .status(400)

      .render('register', { message: 'something went wrong...' }) */
    return res.status(400).render('register', {
      message: {
        type: 'error',
        body: 'Validation errors'
      },
      errors: mongooseErrorFormatter(err),
      formData: req.body
    })
  }
  // let message
})

// login
router.get('/login', (req, res) => {
  return res.render('login', { message: null, errors: {}, formData: {} })
})

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/login-success',
    failureRedirect: '/login-failed'
    // failureFlash: true
  }),
  async (req, res) => {
    return res.render('login', {
      message: {
        type: 'success',
        body: 'Login success!'
      },
      errors: {},
      formData: {}
    })

    // try {
    //   const validationResult = registerSchema.validate(req.body, {
    //     abortEarly: false,
    //   })
    //   if (validationResult.error) {
    //     return res.render('register', {
    //       message: {
    //         type: 'error',
    //         body: 'Validation errors',
    //       },
    //       errors: joiErrorFormatter(validationResult.error),
    //       formData: req.body,
    //     })
    //   } else {
    //     // return res.render('register', { message: 'registration successful!' })
    //     return res.redirect('/login', {
    //       message: {
    //         type: 'success',
    //         body: 'Registration success',
    //       },
    //       errors: {},
    //       formData: req.body,
    //     })
    //   }

    //   // const user = await addUser(req.body)
    // } catch (err) {
    //   console.error(err)
    //   /* res.send(mongooseErrorFormatter(err)) */
    //   /* return res
    //     .status(400)

    //     .render('register', { message: 'something went wrong...' }) */
    //   return res.status(400).render('register', {
    //     message: {
    //       type: 'error',
    //       body: 'Validation errors',
    //     },
    //     errors: mongooseErrorFormatter(err),
    //     formData: req.body,
    //   })
    // }
    // // let message
  }
)

module.exports = router
