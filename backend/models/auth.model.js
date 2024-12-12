const mongoose = require('mongoose');

const authCredSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const UserData = mongoose.model('UserData',authCredSchema);
module.exports = UserData