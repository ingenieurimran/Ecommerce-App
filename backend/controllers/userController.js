const ErrorHandler = require('../utils/errorhandler')

const catchAsyncErrors = require('../middleware/catchAsyncErrors')

const User = require('../model/userModel')

// Register a User

exports.registerUaser = catchAsyncErrors(async (req, res, next) => {
  const {name, email, password} = req.body

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'this is a simple id',
      url: 'profilepicUrl',
    },
  })

  res.status(201).json({
    success: true,
    user,
  })
})
