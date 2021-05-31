
const {Videos} = require('../models/video-model')
const GetVideos =  async (req , res) =>{
  const data = await Videos.find({})
  res.json({status : true , videos : data})
}

const UploadVideo =   async (req , res)=>{
//  used this to upload videos for homepage initially
// now serves no purpose until more videos needs to be added, so keeping it here
try{
  // const data = req.body
// const SavedData = await Videos.insertMany(data)
res.json({message : "data saved successfully"})
}
catch(error){
  res.json({message : "sorry" , errMsg : error.message})
}
}

module.exports = {GetVideos, UploadVideo}