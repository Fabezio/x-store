/* const Joi = require('joi') */
const Joi = require('@hapi/joi')
const registerSchema = Joi.object({
  name: Joi.string().trim().min(2).max(64).required(),

  password: Joi.string().required(),
  //   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  repeat_password: Joi.ref('password'),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'info', 'fr'] }
    })
}).with('password', 'repeat_password')

// schema.validate({ username: 'abc', birth_year: 1994 })
// -> { value: { username: 'abc', birth_year: 1994 } }

// schema.validate({})
// -> { value: {}, error: '"username" is required' }

// Also -

// try {
//   const value = schema.validateAsync({
//     username: 'abc',
//     birth_year: 1994
//   })
// } catch (err) {}

module.exports = { registerSchema }
