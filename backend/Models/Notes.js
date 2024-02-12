const mongoose = require('mongoose');
const user = require('./Users');

const notesSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"todo",
    }
},
{timestamps: true} // Enable timestamps
); 

module.exports = mongoose.model("notes",notesSchema);