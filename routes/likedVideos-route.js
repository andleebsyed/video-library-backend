const express = require('express')
const {GetLikedVideos, AddToLikedVideos, DeleteFromLiked} = require('../controllers/likedVideos')
const {verifyToken} = require('../middlewares/verifyToken')
const LikedVideosRoute = express.Router()

LikedVideosRoute.route('/all').post(verifyToken, GetLikedVideos)

LikedVideosRoute.route('/add').post(AddToLikedVideos)

LikedVideosRoute.route('/delete').post(DeleteFromLiked)

module.exports = {LikedVideosRoute}