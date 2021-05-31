const express = require('express')

const {UpdatePassword} = require('../controllers/password.update')

const PasswordRoute = express.Router()

PasswordRoute.route('/update').post(UpdatePassword)


module.exports = {PasswordRoute}