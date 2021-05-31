const express = require('express')
const VideosRouter = express.Router()
const {GetVideos, UploadVideo} = require('../controllers/videos')

VideosRouter.route('/')
.get(GetVideos)
.post(UploadVideo)

module.exports = {VideosRouter}