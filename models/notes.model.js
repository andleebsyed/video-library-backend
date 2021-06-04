const mongoose = require('mongoose')
const {Schema, model} = mongoose
const NotesSchema = new Schema({
  notes: [{
    type : String, 
    required : true
  }],
  userId :{
    type : Schema.Types.ObjectId,
    required : true
  },
  videoId : {
    type : Schema.Types.ObjectId,
    required : true
  },
})


const Notes = model('note', NotesSchema)

module.exports = {Notes}