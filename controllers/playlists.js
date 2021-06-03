const { Playlists } = require('../models/playlist-model')
const { Users } = require('../models/user-model')
  const GetUserPlaylists = async (req, res) => {
    try {
      const {userId} = req.body
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
  }

  const NewPlaylist =  async (req, res) => {
    try {
      const { playlistName, videoId, userId } = req.body

      const newPlaylist = new Playlists({ playlistName, videos: [videoId] })
      const response = await newPlaylist.save()
      const user = await Users.findOne({ _id: userId })
      user.playlists.push(response._id)
      const userSaveResponse = await user.save()
      res.json({ status: true, message: "playlist added successfully", userSaveResponse })
    }
    catch (error) {
      res.status(500).json({ status: false, message: "couldn't add the playlist", errMesssage: error.message })
    }
  }

  const AddVideoToPlaylist = async (req, res) => {
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
  }
  const RemoveVideoFromPlaylist =  async (req , res) =>{
  try{
    const {playlistId , videoId } = req.body
    const playlist = await Playlists.findById(playlistId)
    playlist.videos = playlist.videos.filter(currentVideoId => String(currentVideoId) !== String(videoId))
    const response = await playlist.save()
    res.json({status : true , message : "video removed from playlist successfully" ,  response })
  }
  catch(error){
    res.status(500).json({status : false , message : "couldn't delete the video" ,  errormessage  : error.message})
  }
}
const RemovePlaylist =  async (req , res) =>{
  try{
      const {userId , playlistId} = req.body
      const user = await Users.findById(userId)
      user.playlists = user.playlists.filter(iteratorId => String(iteratorId) !== String(playlistId))
      const response = await user.save()
      await Playlists.findByIdAndRemove(playlistId)
      res.send({status : true , message : "playlist removed successfully" , response})
  }
  catch(error){
    res.status(500).json({status : false , message : "couldn't remove the playlist " , errMessage : error.message})
  }
}
  module.exports = {GetUserPlaylists, NewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, RemovePlaylist}