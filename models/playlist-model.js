const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
  playlistName: {
    type: String,
    required: true
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Videos" 
    , 
    required : true
  }]
})

const Playlists = mongoose.model('Playlists', PlaylistSchema , 'playlists')

module.exports = { Playlists }