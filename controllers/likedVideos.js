const {Users} = require('../models/user-model')
const {Videos} = require('../models/video-model')
const GetLikedVideos =  async (req , res) =>{
  try{
    const {UserId} = req.body
    const currentUser = await Users.findOne({_id : UserId})
    const response = await currentUser.populate('likedVideos').execPopulate()  
    res.json({status : true , message : "fetched successfully" ,  likedVideos : response.likedVideos})
  } 
  catch(error){
    res.status(500).json({status : false , message : "couldn't fetch the videos" , errMessage : error.message})
  }

}

const AddToLikedVideos =   async (req , res) =>{
  try{
    const {videoId , userId} = req.body
    const user = await Users.findOne({_id : userId})
    user.likedVideos.push(videoId)
    const updateResponse = await user.save()
    res.json({status : true , messsage : "video added successsfully to liked videos of user" , response : updateResponse})
  }
 catch(error){
   res.status(500).json({status : false , message : "couldn't add video to liked videos" , errMessage : error.message})
 }
}

const DeleteFromLiked = async (req , res) =>{
  
  try{
    const {videoId , userId} = req.body
    const user = await  Users.findOne({_id : userId})
    const updatedLikedVideos = user.likedVideos.filter(currentVideoId => String(currentVideoId) !== String(videoId))
    const response = await Users.updateOne({_id : userId } , {likedVideos : updatedLikedVideos })

    res.json({status : true ,  message : "video removed from liked videos successfully" , response : response})
  }
  catch(error){
    res.status(500).status({status : false , message : "couldn't remove the video" , errMessage : error.message})
  }
  }
module.exports = {GetLikedVideos, AddToLikedVideos, DeleteFromLiked}