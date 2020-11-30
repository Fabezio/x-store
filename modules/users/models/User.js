const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
