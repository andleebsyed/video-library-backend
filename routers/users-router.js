const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const UsersRouter = express.Router()

UsersRouter.get('/' , (req , res) =>{
  res.json({status : true  ,  message : 'homepage of users wired successfully'})
})

UsersRouter.post('/signup' , (req , res) =>{
  res.json({status : true  , message : 'wire to signup successfull'})
})

module.exports = {UsersRouter}