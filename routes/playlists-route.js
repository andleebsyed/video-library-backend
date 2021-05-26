const express= require('express')
const PlaylistsRoute = express.Router()
const {Playlists} = require('../models/playlist-model')
PlaylistsRoute.route('/all')
.get(async (req , res) =>{
  try{
    const playlists = await Playlists.find({})
    res.json({status : true , message : "fetched playlists successfully" ,  playlists})
  }
  catch(error){
    res.json({status : false , message : "failed to fetch playlists", errMessage : error.message})
  }
})

PlaylistsRoute.route('/new')
.post(async (req , res) =>{
  try{
    const {playlistName , videoId} = req.body
    const newPlaylist = new Playlists({playlistName , videos : [videoId]})
    const response = await newPlaylist.save()
    res.json({status : true , message : "playlist added successfully" , response})
  }
  catch(error){
    res.status(500).json({status : false , message : "couldn't add the playlist",errMesssage : error.message})
  }
})

PlaylistsRoute.route('/addvideo')
.post(async (req , res) =>{
  try{
    const {playlistId , videoId} = req.body
    const playlist = await Playlists.findOne({_id : playlistId})
    const videosInPlaylist = playlist.videos.push(videoId)
    const response = await  playlist.save()
    res.json({status : true , message : "video added successfully" , response })
  }
  catch(error){
    res.json({status : false , message : "could,t add video to playlist" , errMessage : error.message})
  }
})

module.exports = {PlaylistsRoute}