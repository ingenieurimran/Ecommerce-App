const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your Name'],
    maxLength: [30, 'Name can not exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your Email'],
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid Email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your Pasword'],
    minLength: [5, 'Password should be greater than 5 characters'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
})

module.exports = mongoose.model('User', userSchema)
