const Hotel  = require('../models/hotels')
const { populate } = require('../models/hotels');
ObjectId = require('mongoose').Types.ObjectId;
const Room = require("../models/rooms")

exports.viewbyidhotel = async(req,res) => {
    try{
        const hotel = await Hotel.findById(
        req.params.id
        );
       res.status(200).json(hotel);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.viewhotel = async(req,res) => {
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
     
    } catch (err) {
        res.status(500).json(err);
    }
}
exports.reghotel = async(req,res) => {
    const newHotel = new Hotel({
        hotel_name : req.body.hotel_name,
        city : req.body.city,
        location : req.body.location,
        rating : req.body.rating,
        staff_id : req.user
    })
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.updatehotel = async(req,res) => {
    try{    
        const updateHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
       { $set : req.body },
       { new : true })
       res.status(200).json(updateHotel);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deletehotel = async(req,res) => {
    try{ 
       const ro = await Room.deleteMany({hotel : req.params.id});
        try{ 
        await Hotel.findByIdAndDelete( 
        req.params.id
        );
       res.status(200).json("Hotel has been deleted");
        }catch(err){
            res.send(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.bulkupdate = async(req,res) =>{
    if(Array.isArray(req.body)){
        for(let element of req.body){ 
            const newHotel = new Hotel({
                hotel_name : element.hotel_name,
                city : element.city,
                location : element.location,
                rating : element.rating,
                staff_id : req.user
            })
            try{
                const savedHotel = await newHotel.save();
                // res.status(200).json(savedHotel);
            } catch (err) {
                res.status(500).json(err);
            }
    } 
    res.send("inserted successfully");
}
};

exports.viewbyrating = async(req,res) => {
    let hotel = await Hotel.find({'rating':5})
    res.status(200).json(hotel)
}

exports.hotelpagination = async(req,res) => {
    try{
        let { page,size } = req.query;
        if(!page){
            page=1;
        }
        if(!size){
            size=10;
        }
        const limit = parseInt(size);
        const skip = (page-1) * size;
        const hotels = await Hotel.find().limit(limit).skip(skip);
        res.status(200).send({page,size,data : hotels});
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.hoteloffset = async(req,res) => {
    try{
        let { start,size } = req.query;
        const skip = parseInt(start);
        const limit = parseInt(size);
        const hotels = await Hotel.find().skip(skip).limit(limit);
        res.status(200).send({hotels});
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.hotellimit = async(req,res) => {
    try{
        let {size} = req.query;
    
        const limit = parseInt(size);
        const hotels = await Hotel.find().limit(limit);
        res.status(200).send(hotels);
    } catch (err) {
        res.status(500).json(err);
    }
}
