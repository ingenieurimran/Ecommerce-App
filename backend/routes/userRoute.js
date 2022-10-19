const express = require('express')
const {registerUaser, userLogin, logout} = require('../controllers/userController')

const router = express.Router()

router.route('/register').post(registerUaser)

router.route('/login').post(userLogin)

router.route('/logout').get(logout)

module.exports = router
