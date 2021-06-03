const express = require('express')
const PlaylistsRoute = express.Router()
const { Playlists } = require('../models/playlist-model')
const { Users } = require('../models/user-model')
const {GetUserPlaylists, NewPlaylist, AddVideoToPlaylist, RemoveVideoFromPlaylist, RemovePlaylist} = require('../controllers/playlists')

const {verifyToken} = require('../middlewares/verifyToken')

PlaylistsRoute.route('/all').post(verifyToken, GetUserPlaylists)

PlaylistsRoute.route('/newplaylist').post(verifyToken, NewPlaylist)

PlaylistsRoute.route('/addvideo').post(verifyToken, AddVideoToPlaylist)

PlaylistsRoute.route('/removevideo').post(verifyToken, RemoveVideoFromPlaylist)

PlaylistsRoute.route('/removeplaylist').post(verifyToken, RemovePlaylist)


module.exports = { PlaylistsRoute }