const express = require('express')
const PlaylistsRoute = express.Router()
const { Playlists } = require('../models/playlist-model')
const { Users } = require('../models/user-model')
const {GetUserPlaylists, NewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, RemovePlaylist} = require('../controllers/playlists')

PlaylistsRoute.route('/all/:userId').get(GetUserPlaylists)

PlaylistsRoute.route('/newplaylist').post(NewPlaylist)

PlaylistsRoute.route('/addvideo').post(AddVideoToPlaylist)

PlaylistsRoute.route('/removevideo').post(RemoveVideoFromPlaylist)

PlaylistsRoute.route('/removeplaylist').post(RemovePlaylist)


module.exports = { PlaylistsRoute }