const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {DbConnection} = require('./db/DbConnection')
// const {SignupRouter} = require('./routers/users-router')
const app = express()
// const router = express.Router()
const PORT = 3000
const {UsersRouter} = require('./routers/users-router')

// initialize database connection
DbConnection()

app.get('/' , (req , res) =>{
  res.json({status : true , message : "welcome to homepage"})
})

app.use('/users' , UsersRouter)

app.listen(PORT , () => console.log("Server up and running at " , PORT))
