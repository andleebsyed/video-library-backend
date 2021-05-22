const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const UsersRouter = express.Router()
const cors = require('cors')
UsersRouter.use(cors())
UsersRouter.use(bodyParser.json())
const {Users} = require('../models/user-model')
UsersRouter.use(bodyParser.json())
UsersRouter.get('/' , (req , res) =>{
  res.json({status : true  ,  message : 'homepage of users wired successfully'})
})

UsersRouter.post('/signup' , async (req , res) =>{
  try{
    const {userDetails} = req.body
    console.log("data coming " , req.body)
    const newUser = new Users(userDetails)
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password , salt)
    const SavedData = await newUser.save()
    res.json({status : true  , message : 'user added successfully'})
  }
  catch(error){
    if(error.code === 11000){
       res.json({status : false , message : "couldn't add user" , errorDetail : error , existingField : Object.keys(error.keyPattern)[0]
       })
    }
    res.json({status : false , message : "couldn't add user" , errorDetail : error})
  }
 
}
)

UsersRouter.post('/signin' , async (req , res) =>{
  try{
    const {userDetails} = req.body
    console.log("user details " , req.body)
  const ourUser = await Users.findOne({username : userDetails.username})
  console.log("ourUser " , ourUser)
  if(ourUser){
    console.log("user matched")
    const validPassword = await bcrypt.compare(userDetails.password, ourUser.password);
    if(validPassword){
      console.log("password also matched")
      res.json({status : true  , allowUser : true , message : "logged in successfully" , user : {ourUser}
    })
    }
    else{
        res.json({status : true  , allowUser : false , message : "username and/or password incorrect"})
    }
  }
  else{
    res.json({status : true  , allowUser : false , message : "username and/or password incorrect"})
  }

  }
  catch(error){
    res.json({status : false , errorDetail : error , errorMesssage : error.message})
  }

})



  

module.exports = {UsersRouter}