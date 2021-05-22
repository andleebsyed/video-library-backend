const mongoose = require('mongoose')
const LikedVideosSchema = mongoose.Schema({
  id :{
  type : String , 
  required : true , 
  unique : true
},
creatorName : {
   type : String , 
  required : true
} , 
creatorThumbnail : {
   type : String , 
  required : true
} , 
videoName : {
   type : String , 
  required : true
} , 
thumbnail : {
   type : String , 
  required : true
} , 
url : {
   type : String , 
  required : true
} , 
description : {
   type : String , 
  required : true
} , 
category : {
   type : String , 
  required : true
} ,
})
const LikedVideos = mongoose.model('LikedVideos' , LikedVideosSchema , 'likedVideos')
module.exports = {LikedVideos}