const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const UsersRouter = express.Router()
const {Users} = require('../models/user-model')
UsersRouter.use(bodyParser.json())
UsersRouter.get('/' , (req , res) =>{
  res.json({status : true  ,  message : 'homepage of users wired successfully'})
})

UsersRouter.post('/signup' , async (req , res) =>{
  try{
    const {userDetails} = req.body
    const newUser = new Users(userDetails)
    const SavedData = await newUser.save()
    res.json({status : true  , message : 'user added successfully'})
  }
  catch(error){
    res.json({status : false , message : "couldn't add user" , errorDetail : error})
  }
 
})

module.exports = {UsersRouter}