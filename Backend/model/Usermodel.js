const mongoose = require('mongoose');
// creating Schema
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true,   },
    age : {
        type:String,
    },
},{timestamps:true})
// creating Model
const User = new mongoose.model('User',userSchema)
module.exports = User;