const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [2, 'Name length cannot be less than 2 characters '],
      maxlength: [64, 'Name length cannot be greater than 64 characters ']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      // minlength: [2, "Name length cannot be less than 2 characters "],
      maxlength: [128, 'Email length cannot be greater than 128 characters '],
      index: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
