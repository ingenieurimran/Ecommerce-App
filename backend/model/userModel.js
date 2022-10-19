const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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

// hash password before save
userSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next()
  }
  this.password = await bcrypt.hash(this.password,10)
})

// JWT Token

userSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE
  })
}

// Compare Password
userSchema.methods.camparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = mongoose.model('User', userSchema)
