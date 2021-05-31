const express = require('express')
const bcrypt = require('bcrypt')
const UsersRouter = express.Router()
const {Users} = require('../models/user-model')
const {UserSignUp, UserSignIn} = require('../controllers/users')

UsersRouter.route('/signup').post(UserSignUp) 

UsersRouter.route('/signin').post(UserSignIn)

module.exports = {UsersRouter}