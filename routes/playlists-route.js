const express = require('express')
const PlaylistsRoute = express.Router()
const { Playlists } = require('../models/playlist-model')
const { Users } = require('../models/user-model')

PlaylistsRoute.route('/all/:userId')
  .get(async (req, res) => {
    try {
      const userId = req.params.userId
      console.log("userid is ", userId)
      const response = await Users.findById(userId).populate({
        path: 'playlists',
        model: 'Playlists',
        populate: {
          path: 'videos',
          model: 'Videos'
        }
      })
      res.json({ status: true, message: "fetched playlists successfully", playlists: response.playlists })
    }
    catch (error) {
      res.json({ status: false, message: "failed to fetch playlists", errMessage: error.message })
    }
  })

PlaylistsRoute.route('/newplaylist')
  .post(async (req, res) => {
    try {
      const { playlistName, videoId, userId } = req.body

      const newPlaylist = new Playlists({ playlistName, videos: [videoId] })
      console.log("playlist created " , newPlaylist)
      const response = await newPlaylist.save()
      console.log("rrsponse on savng new playlist " , response)
      const user = await Users.findOne({ _id: userId })
      user.playlists.push(response._id)
      const userSaveResponse = await user.save()
      res.json({ status: true, message: "playlist added successfully", userSaveResponse })
    }
    catch (error) {
      res.status(500).json({ status: false, message: "couldn't add the playlist", errMesssage: error.message })
    }
  })

PlaylistsRoute.route('/addvideo')
  .post(async (req, res) => {
    try {
      const { playlistId, videoId } = req.body
      const playlist = await Playlists.findOne({ _id: playlistId })
      const videosInPlaylist = playlist.videos.push(videoId)
      const response = await playlist.save()
      res.json({ status: true, message: "video added successfully", response })
    }
    catch (error) {
      res.json({ status: false, message: "could,t add video to playlist", errMessage: error.message })
    }
  })

PlaylistsRoute.route('/deletevideo')
.post(async (req , res) =>{
  try{
    const {playlistId , videoId } = req.body
    const playlist = await Playlists.findById(playlistId)
    // const newVideos
    playlist.videos = playlist.videos.filter(currentVideoId => String(currentVideoId) !== String(videoId))
    const response = await playlist.save()
    // const response = await Playlists.update({_id : playlistId} , {videos : newVideos})
    res.json({status : true , message : "video removed from playlist successfully" ,  response })
  }
  catch(error){
    res.json({status : false , message : "couldn't delete the video" ,  errormessage  : error.message})
  }
})

module.exports = { PlaylistsRoute }