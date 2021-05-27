const {Users} = require('../models/user-model')
const {Videos} = require('../models/video-model')
const express = require('express')
const LikedVideosRoute = express.Router()
LikedVideosRoute.route('/all')
.post(async (req , res) =>{
  try{
    console.log("data comingin body " ,req.body)
    const {UserId} = req.body
    console.log("user id coming or not " , UserId)
    const currentUser = await Users.findOne({_id : UserId})
    const response = await currentUser.populate('likedVideos').execPopulate()  
    res.json({status : true , message : "fetched successfully" ,  likedVideos : response.likedVideos})
  } 
  catch(error){
    res.status(500).json({status : false , message : "couldn't fetch the videos" , errMessage : error.message})
  }

})
LikedVideosRoute.route('/add')
.post(async (req , res) =>{
  try{
    const {videoId , userId} = req.body
    const user = await Users.findOne({_id : userId})
    user.likedVideos.push(videoId)
    const updateResponse = await user.save()
    res.json({status : true , messsage : "video added successsfully to liked videos of user" , response : updateResponse})
  }
 catch(error){
   res.status(500).json({status : false , message : "couldn't add video to liked videos" , errMessage : error.message})
 }
})
LikedVideosRoute.route('/delete')
.post(async (req , res) =>{
  
  try{
    console.log("data in  body of delete" , req.body)
    const {videoId , userId} = req.body
    const user = await  Users.findOne({_id : userId})
    const updatedLikedVideos = user.likedVideos.filter(currentVideoId => String(currentVideoId) !== String(videoId))

    const response = await Users.updateOne({_id : userId } , {likedVideos : updatedLikedVideos })

    res.json({status : true ,  message : "video removed from liked videos successfully" , response : response})
  }
  catch(error){
    res.status(500).status({status : false , message : "couldn't remove the video" , errMessage : error.message})
  }

  }) 

module.exports = {LikedVideosRoute}