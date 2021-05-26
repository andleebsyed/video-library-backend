const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const {DbConnection} = require('./db/DbConnection')
// const {SignupRouter} = require('./routers/users-router')
const app = express()
app.use(cors())
app.use(express.json())
// const router = express.Router()
const PORT = 3000
const {UsersRouter} = require('./routes/users-route')
const {VideosRouter} = require('./routes/videos-route')
const {LikedVideosRoute} = require('./routes/likedVideos-route')
const {PlaylistsRoute} = require('./routes/playlists-route')


// initialize database connection
DbConnection()

app.get('/' , (req , res) =>{
  res.json({status : true , message : "welcome to homepage"})
})

app.use('/users' , UsersRouter)
app.use('/videos' , VideosRouter)
app.use('/liked' , LikedVideosRoute)
app.use('/playlists' , PlaylistsRoute )

// use error handling middlewares 


app.listen(PORT , () => console.log("Server up and running at " , PORT))
