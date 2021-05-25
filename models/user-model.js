const mongoose = require('mongoose')

  
const UserSchema = mongoose.Schema({
  username : {
    type : String , 
    required : true , 
    unique : true
  } ,
  email : {
    type : String , 
    required : true , 
    unique : true
  } ,
  password :{
    type : String ,
    required : true
  } , 
  likedVideos :[{ 
    type : mongoose.Schema.Types.ObjectId , 
    ref : "likedVideos"
  }
  ] , 
  playlists : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "playlists"
    }
  ]

})

const Users = mongoose.model('Users' , UserSchema , 'users')

module.exports = {Users}