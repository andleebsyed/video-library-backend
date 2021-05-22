const {LikedVideos} = require('../models/likedVideos-model')
const express = require('express')
const LikedVideosRoute = express.Router()
LikedVideosRoute.route('/')
.get((req , res ) =>{
  res.json({status : true , message : "get of liked working"})
})
.post((req , res) =>{
  res.json({status : true , messsage : "post of liked working"})
})

module.exports = {LikedVideosRoute}