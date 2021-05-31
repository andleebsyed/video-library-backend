const {Users} = require('../models/user-model')
const bcrypt = require('bcrypt')
const UserSignUp= async (req , res) =>{
  try{
    const {userDetails} = req.body
    const newUser = new Users(userDetails)
    const salt = await bcrypt.genSalt(10)
    newUser.password = await bcrypt.hash(newUser.password , salt)
    const SavedUser = await newUser.save()
    res.json({status : true  , message : 'user added successfully' , user : SavedUser})
  }
  catch(error){
    if(error.code === 11000){
       res.json({status : false , message : "couldn't add user" , errorDetail : error.message , existingField : Object.keys(error.keyPattern)[0]
       })
    }
    res.json({status : false , message : "couldn't add user" , errorDetail : error.message})
  }
 
}

const UserSignIn = async (req , res) =>{
  try{
    const {userDetails} = req.body
    const ourUser = await Users.findOne({username : userDetails.username})
    if(ourUser){
      const validPassword = await bcrypt.compare(userDetails.password, ourUser.password);
      if(validPassword){
        res.json({status : true  , allowUser : true , message : "logged in successfully" , user : ourUser
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

}
module.exports = {UserSignUp ,UserSignIn}