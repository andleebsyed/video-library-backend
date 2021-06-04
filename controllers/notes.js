const {Notes} = require('../models/notes.model')

const AddNote = async (req, res) => {
  try{
    const {videoId, userId, note} = req.body
    const data = {notes :  [note], videoId, userId }
    const currentNotes = await Notes.findOne({videoId: videoId, userId : userId })
    console.log("these are my notes currently ", currentNotes)
    if(currentNotes === null){
      const initialNote = await new Notes(data)
      const response = await initialNote.save()
      res.json({status : true, message : "note saved successfully", response})
      
    }
    else{
      console.log(currentNotes.notes)
      currentNotes.notes.push(note)
     const response =  await currentNotes.save()
      res.json({status : true, message : "note saved successfully", response})
    }
  }
  catch(error){
    res.status(500).json({status : false, message : "couldn't add the note", errMessage : error.message})
  }
}

module.exports = {AddNote}