const express = require('express')

const {UpdatePassword} = require('../controllers/password.update')
const {verifyToken} = require('../middlewares/verifyToken')
const PasswordRoute = express.Router()

PasswordRoute.route('/update').post(verifyToken, UpdatePassword)


module.exports = {PasswordRoute}