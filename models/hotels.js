const mongoose = require('mongoose')
const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String
    },
    city: {
        type : String
    },
    location: {
        type:String
    },
    rating: {
        type : Number,
        min :0,
        max :5
    },
    staff_id:{
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'staffs'        
    },
}, {timestamps:  true })
module.exports = mongoose.model ('hotel',hotelSchema)

