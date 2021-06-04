const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const NotesRoute = express.Router()
const {AddNote, GetNotes, DeleteNote} = require('../controllers/notes')

NotesRoute.route('/add').post(verifyToken, AddNote)
NotesRoute.route('/all').post(verifyToken, GetNotes)
NotesRoute.route('/delete').post(verifyToken, DeleteNote)


module.exports = {NotesRoute}