const {Users} = require('../models/user-model')
const bcrypt = require('bcrypt')
const UpdatePassword = async (req , res) =>{
  try{
    const {userId , oldPassword , newPassword} = req.body
    const currentUser = await Users.findById(userId)
    const validPassword = await bcrypt.compare(oldPassword, currentUser.password);
    if(validPassword){
      console.log("passwords matched")
      const salt = await bcrypt.genSalt(10)
      currentUser.password = await bcrypt.hash(newPassword , salt)
      await currentUser.save()
        res.json({status : true   , message : "Password updated."
      })
    }
    else{
        res.json({status : false, message : "Current Password incorrect.Try again with correct password." })
    }
  }
  catch(error){
    res.json({status : false , error : true , message : error.message})
  }
}

module.exports= {UpdatePassword}