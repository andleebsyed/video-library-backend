const express = require('express')
const {verifyToken} = require('../middlewares/verifyToken')
const NotesRoute = express.Router()
const {AddNote} = require('../controllers/notes')

NotesRoute.route('/add').post(verifyToken, AddNote)


module.exports = {NotesRoute}