const express = require('express')
const {registerUaser} = require('../controllers/userController')

const router = express.Router()

router.route('/register').post(registerUaser)

module.exports = router
