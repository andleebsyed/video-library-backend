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
} )


module.exports = {AccountRoute}