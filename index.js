const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const {DbConnection} = require('./db/DbConnection')
const app = express()
const PORT = 3000
// initialize database connection
DbConnection()



app.get('/' , (req , res) =>{
  res.json({status : true , message : "welcome to homepage"})
})


app.listen(PORT , () => console.log("Server up and running at " , PORT))
