const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const NotesRoute = express.Router()
const {AddNote, GetNotes} = require('../controllers/notes')

NotesRoute.route('/add').post(verifyToken, AddNote)
NotesRoute.route('/getnotes').post(verifyToken, GetNotes)


module.exports = {NotesRoute}