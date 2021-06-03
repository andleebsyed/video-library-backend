const jwt = require('jsonwebtoken')
function verifyToken(req, res, next){
  try{
      const token = req.headers.authorization
      const secret = process.env.SECRET
      const decoded = jwt.verify(token , secret)
      req.body = {...req.body, userId : decoded.userId} 
      console.log(req.body)
      next()
  }
  catch(error){
    res.status(401).json({status : false, message : "couldn't authorize user" ,errMessage : error.message})
  }
  
}

module.exports = {verifyToken}