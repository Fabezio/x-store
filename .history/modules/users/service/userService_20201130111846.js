const User = require("../models/User")

/**
 * @param {Object} userInput
 */

const addUser = async (userInput) => {
    try {
        const newUser = new User(userInput)
        await newUser.save()
    } catch(err) {
        console.log(err)
    }
}