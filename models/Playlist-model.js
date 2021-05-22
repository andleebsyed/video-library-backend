const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
  playlistName : {
    type : String , 
    rewuired : true
  }
  videos : [{
   type : Schema.Types.Mixed , 
   required : true 
  }]
})

const Playlists = mongoose.model('Playlists' , PlaylistSchema , 'playlists')

module.exports = {Playlists}