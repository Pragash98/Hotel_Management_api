const mongoose = require('mongoose');
const roomschema = new mongoose.Schema({
    max_guests: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    roomImage: {
        type: String,
        required: true
    },
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel',
        required: [true, 'ENTER HOTEL ID']
    },
}, { timestamps: true })
module.exports = mongoose.model('room', roomschema);

