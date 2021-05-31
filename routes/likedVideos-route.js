// const {Users} = require('../models/user-model')
// const {Videos} = require('../models/video-model')
const express = require('express')
const {GetLikedVideos, AddToLikedVideos, DeleteFromLiked} = require('../controllers/likedVideos')
const LikedVideosRoute = express.Router()

LikedVideosRoute.route('/all').post(GetLikedVideos)

LikedVideosRoute.route('/add').post(AddToLikedVideos)

LikedVideosRoute.route('/delete').post(DeleteFromLiked)

module.exports = {LikedVideosRoute}