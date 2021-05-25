const {LikedVideos} = require('../models/likedVideos-model')
const {Users} = require('../models/user-model')
const {Videos} = require('../models/videos-model')



const express = require('express')
const {ObjectId} = require('mongoose')
const LikedVideosRoute = express.Router()
LikedVideosRoute.route('/' ,)
.get(async (req , res) =>{
  try{
    const {userId} = req.body
  const currentUser = await Users.findOne({_id : userId})
  const likedVideosIdArray = currentUser.likedVideos
  const likedVideos = await Promise.all(
    likedVideosIdArray.map(async (id) =>{
     const video =  await Videos.findOne({_id : id})
     return video
  })
  )  
  res.json({status : true , message : "fetched successfully" ,  likedVideos : likedVideos})
  } 
  catch(error){
    res.json({status : false , message : "couldn't fetch the videos" , errMessage : error.message})
  }

})
LikedVideosRoute.route('/add')
.post(async (req , res) =>{
  try{
    console.log("req.body " , req.body)
    const {data} = req.body
    const {video , user_id} = data
    const user = await Users.findOne({_id : user_id})
    user.likedVideos.push(video._id)
    const updateResponse = await user.save()
    res.json({status : true , messsage : "video added successsfully to liked videos of user" , response : updateResponse})
  }
 catch(error){
   console.log(JSON.stringify(error.message))
   res.status(500).json({status : false , message : "couldn't add video to liked videos" , errMessage : error.message})
 }
})

module.exports = {LikedVideosRoute}