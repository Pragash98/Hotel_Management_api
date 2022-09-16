const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    user_name : {
        type:String,
        required:true
    },
    address : {
        type : String,
        required : true
    },
    dob : {
        type:Date,
        required:true
    },
    mobile_number : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required:true
    },
    password : {
        type : String,
        required : true
        
    },
}, {timestamps:  true })

module.exports = mongoose.model('user',userschema)