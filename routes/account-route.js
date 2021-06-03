const express = require('express')
const AccountRoute = express.Router()
const {GetUser, UpdateUser} = require('../controllers/account')
const {verifyToken} = require('../middlewares/verifyToken')
AccountRoute.route('/').post(verifyToken, GetUser)

AccountRoute.route('/update').post(verifyToken, UpdateUser)

module.exports = {AccountRoute}