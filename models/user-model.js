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
    ref : "LikedVideos"
  }
  ] , 
  playlists : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Playlists"
    }
  ]

})

const Users = mongoose.model('Users' , UserSchema , 'users')

module.exports = {Users}