const express = require('express')
const {Users} = require('../models/user-model')
const AccountRoute = express.Router()

AccountRoute.route('/')
.post(async (req , res) => {
  try{
     const {userId} = req.body
  const user = await Users.findById(userId)
  const accountDetails = {email : user.email , username : user.username}
  res.json({status : true , message : "account details fetched successfully" , accountDetails})
  }
 catch(error){
   res.json({status : false ,  message : "couldn.t fetch the user" , errMessage : error.messsage})
 }
})

AccountRoute.route('/update')
.post(async (req , res) =>{
  try{
    const {userId, newUsername  , newEmail} = req.body
  
    async function checkForExistingEmail(){
    const ifEmailPresent = await Users.findOne({email : newEmail})
    if(ifEmailPresent && ifEmailPresent._id === userId){
      throw {message : "Couldn't Update, email already linked to a different account"}
    }
  }

   async function checkForExistingUserName(){
    const ifUsernamePresent = await Users.findOne({username : newUsername})
    if(ifUsernamePresent && ifUsernamePresent._id === userId){
      throw {message : "Couldn't Update, username already exists"}
    }
  }
    await checkForExistingEmail()
    await checkForExistingUserName()
    
   const response = await Users.findOneAndUpdate({_id : userId} , {username : newUsername , email : newEmail} , {new : true})
   res.json({status : true , message : "User Updated successfully" , response})
  }
  catch(error){
    res.status(500).json({status : false , message : "couldn't update user" , error : error, errMessage: error.message})
  }
  
})


module.exports = {AccountRoute}