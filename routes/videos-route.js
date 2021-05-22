const express = require('express')
const VideosRouter = express.Router()
const {Videos} = require('../models/videos-model')
const cors = require('cors')
const bodyParser = require('body-parser')
VideosRouter.use(cors())
VideosRouter.use(bodyParser.json())

VideosRouter.route('/')
.get(async (req , res) =>{
  const data = await Videos.find({})
  res.json({status : true , videos : data})
})
.post(async (req , res)=>{
//  used t=this to upload whole data in one time
// now serves no purpose until more videos needs to be added
// try{
// // const SavedData = await Videos.insertMany(data)
// res.json({message : "data saved successfully"})
// }
// catch(error){
//   res.json({message : "sorry" , errMsg : error.message})
// }
})
module.exports = {VideosRouter}