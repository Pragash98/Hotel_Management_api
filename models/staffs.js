const mongoose = require('mongoose');
const staffschema = new mongoose.Schema({
    staff_name : {
        type:String,
        required:true
    },
    mobile_number: {
        type : String,
        required : true 
    },
    password :{
        type : String,
    }
}, {timestamps:  true })
module.exports = mongoose.model ('staff',staffschema);

