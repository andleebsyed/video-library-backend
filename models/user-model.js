const mongoose = require('mongoose')
const {Schema , model} = mongoose  
const UserSchema = Schema({
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
    type : Schema.Types.ObjectId , 
    ref : "Videos"
  }
  ] , 
  playlists : [
    {
      type : Schema.Types.ObjectId,
      ref : "Playlists"
    }
  ]

})

const Users = model('Users' , UserSchema , 'users')

module.exports = {Users}