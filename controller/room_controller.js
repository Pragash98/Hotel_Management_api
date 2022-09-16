const Room  = require('../models/rooms');
const { populate } = require('../models/users');

exports.viewbyidroom = async(req,res) => {
    try{
        const rooms = await Room.findById(
        req.params.id
        );
       res.status(200).json(rooms);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.viewroom = async(req,res) => {
    try{
        const rooms = await Room.find().populate('hotel',{staff_id : 0})
       res.status(200).json(rooms );
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.regroom = async(req,res) => {
    
    const roomreg = new Room({
        max_guests : req.body.max_guests,
        price : req.body.price,
        hotel : req.body.hotel
    })
    try{
        const savedRoom = await roomreg.save();
        res.status(200).json(savedRoom);
    } catch (err) {
        res.status(500).json(err);
    }

}

exports.updateroom = async(req,res) => {
    try{    
        const updateroom = await Room.findByIdAndUpdate(
        req.params.id,
       { $set : req.body },
       { new : true })
       res.status(200).json(updateroom);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteroom = async(req,res) => {
    try{
        await Room.findByIdAndDelete(
        req.params.id
        );
       res.status(200).json("Room has been deleted");
     
    } catch (err) {
        res.status(500).json(err);
    }
}
 
