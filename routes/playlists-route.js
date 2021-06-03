const express = require('express')
const PlaylistsRoute = express.Router()
const { Playlists } = require('../models/playlist-model')
const { Users } = require('../models/user-model')
const {GetUserPlaylists, NewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, RemovePlaylist} = require('../controllers/playlists')

const {verifyToken} = require('../middlewares/verifyToken')

PlaylistsRoute.route('/all').post(verifyToken, GetUserPlaylists)

PlaylistsRoute.route('/newplaylist').post(NewPlaylist)

PlaylistsRoute.route('/addvideo').post(AddVideoToPlaylist)

PlaylistsRoute.route('/removevideo').post(RemoveVideoFromPlaylist)

PlaylistsRoute.route('/removeplaylist').post(RemovePlaylist)


module.exports = { PlaylistsRoute }