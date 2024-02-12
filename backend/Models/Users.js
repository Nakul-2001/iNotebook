const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        unique:true,
        required:true,
    }
},
{timestamps: true} // Enable timestamps
);

module.exports = mongoose.model("user",usersSchema);