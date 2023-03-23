const Booking = require("../models/rooms_booked")
const moment = require("moment")
const Rooms = require("../models/rooms")
const mongoose = require("mongoose")
exports.viewbooking = async (req, res) => {
    try {
        const booking = await Booking.find();
        res.status(200).json(booking);
        // if(booking = null){
        //     res.send("NO BOOKING")
        // }
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.viewusersbooking = async (req, res) => {
    try {
        let id = req.user;
        const booking = await Booking.find({ user_id: id }).populate("user_id").populate("room_id").exec();
        res.status(200).json(booking);

    } catch (err) {
        res.status(500).json(err);
    }
}
exports.viewbookingfull = async(req,res) => {
    try{
        const rooms = await Booking.find().populate('hotel',{staff_id : 0})
       res.status(200).json(rooms );
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.viewbookbyid = async (req, res) => {

}
exports.bookroom = async (req, res) => {
    let today = moment(new Date()).format('YYYY-MM-DD');
    let fmd = new Date(moment(req.body.from_date).format('YYYY-MM-DD'));
    let tmd = new Date(moment(req.body.to_date).format("YYYY-MM-DD"));
    let a = moment([fmd.getFullYear(), fmd.getMonth(), fmd.getDate()])
    let b = moment([tmd.getFullYear(), tmd.getMonth(), tmd.getDate()])
    let no_of_days = b.diff(a, 'days')
    let room;
    if (mongoose.Types.ObjectId.isValid(req.body.room_id)) {
        room = await Rooms.findById(req.body.room_id);
    }
    else {
        return res.send("not valid room id")
    }
    let price = room.price;
    let amount = no_of_days * price;
    let roomid = room._id.toString();
    if (req.body.from_date > today && req.body.to_date > req.body.from_date) {
        const roombooking = new Booking({
            user_id: req.user,
            room_id: req.body.room_id,
            from_date: req.body.from_date,
            to_date: req.body.to_date,
            total_price: amount
        });
        try {
            const savedroom = await roombooking.save();
            res.status(200).json(savedroom);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.send("Enter correct date"); 
    } 
}

exports.updatebooking = async (req, res) => {
    try {
        const updatebooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true })
        res.status(200).json(updatebooking);

    } catch (err) {
        res.status(500).json(err);
    }
}
exports.deletebooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("booking has been deleted");

    } catch (err) {
        res.status(500).json(err);
    }
} 