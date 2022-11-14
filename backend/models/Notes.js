const mongoose=require('mongoose');

const NotesSchema = new Schema({
    title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        unique:true,
        required:true
    },
    tag :{
        type:String,
        required:true
    },
    date :{
        type:Date,
        default:Date.now
    }
  });
  module.exports = mongoose.model('Notes',NotesSchema);
