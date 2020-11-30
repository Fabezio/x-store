const User = require('../models/User')

/**
 * @param {Object} userInput
 */

const addUser = async (userInput) => {
  const newUser = new User(userInput)
  await newUser.save()
  return newUser
}

module.exports = { addUser: addUser }
