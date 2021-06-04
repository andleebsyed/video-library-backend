const mongoose = require('mongoose')
const {Schema} = mongoose
const NotesSchema = new Schema({
  notes: {
    type : string, 
    required : true
  },
  userId :{
    type : Schema.Types.ObjectId
    required : true
  },
  videoId : {
    type : Schema.Types.ObjectId
    required : true
  },
})


const Notes = model('note', NotesSchema)

module.exports = {Notes}