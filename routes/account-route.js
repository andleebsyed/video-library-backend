const express = require('express')
const AccountRoute = express.Router()
const {GetUser, UpdateUser} = require('../controllers/account')

AccountRoute.route('/').post(GetUser)

AccountRoute.route('/update').post(UpdateUser)

module.exports = {AccountRoute}