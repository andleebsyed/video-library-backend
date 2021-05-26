const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
  playlistName: {
    type: String,
    required: true
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Videos" 
  }]
})

const Playlists = mongoose.model('playlist', PlaylistSchema)

module.exports = { Playlists }