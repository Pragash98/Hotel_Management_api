const mongoose = require('mongoose')
const adminschema = new mongoose.Schema({
    username : {
        type : String,
    },
    password : {
        type : String        
    },
    email : {
        type: String,
        required:true
    },
    mobile_number : {
        type : String,
        required : true,
        unique : true
    },
}, {timestamps:  true })
module.exports = mongoose.model('admin',adminschema)