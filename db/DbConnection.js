const mongoose = require('mongoose')
function DbConnection(){
  mongoose.connect('mongodb+srv://andleebsyed:andy123@cluster0.m8l5v.mongodb.net/video-library' , {useNewUrlParser : true , useUnifiedTopology : true})
.then(res => console.log("connected to database"))
.catch(error => console.log("error occured " , error))
}
module.exports = {DbConnection}
