const express = require('express')
const bodyParser = require('body-parser')
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
  const allUsers = await Users.find({})
  const {userDetails} = req.body
  console.log("user details " , req.body)
  let isRegistered = false

  // check if user is there in collection
  allUsers.map(singleUser =>{
    if(singleUser.username === userDetails.username && singleUser.password === userDetails.password){
      isRegistered = true
    }
    }
    )
  
    if(isRegistered){
      res.json({status : true  , allowUser : isRegistered , message : "logged in successfully"})
    }
    else{
        res.json({status : true  , allowUser : isRegistered , message : "username and/or password incorrect"})
    }

}


  catch(error){
    res.json({status : false , errorDetail : error , errorMesssage : error.message})
  }

})

module.exports = {UsersRouter}