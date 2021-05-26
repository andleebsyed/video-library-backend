const mongoose = require('mongoose')
const VideoSchema = mongoose.Schema({
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


const Videos = mongoose.model('Videos' , VideoSchema , 'videos')
module.exports =  {Videos}