const mongoose = require('mongoose')
const bookingschema = new mongoose.Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'   
    },
    room_id : {
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'room',
        unique: true
    },
    from_date : {
        type : Date,
        require : true
    },
    to_date : {
        type : Date,
        require : true
    },
    total_price :{
        type : Number
    },
}, {timestamps: { createdAt : 'dateofbooking'}})
module.exports = mongoose.model('rooms_booked',bookingschema)