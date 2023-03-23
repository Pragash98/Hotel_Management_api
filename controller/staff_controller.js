const Staffs = require("../models/staffs")
const bcrypt = require("bcrypt")
const webtoken = require("jsonwebtoken")
const multer = require("multer")

const upload = multer({
    dest:'./upload/images',
})

exports.viewbyidstaff = async(req,res) => {
    try{
        const staff = await Staffs.findById(
        req.params.id
        );
       res.status(200).json(staff);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.viewstaff = async(req,res) => {
    try{
        const staff = await Staffs.find();
       res.status(200).json(staff);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.regstaff = async(req,res) => {
    const saltRounds = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const staffreg = new Staffs({
        staff_name : req.body.staff_name,
        mobile_number : req.body.mobile_number,
        password : hashedPassword
    });
    try{
        const savedstaff = await staffreg.save();
        res.status(200).json(savedstaff);
    } catch (err) {
        res.status(500).json(err);
    }
}


exports.stafflogin = async (req,res) =>{
    const user = await Staffs.findOne({
        mobile_number:req.body.mobile_number
    });
    try{
        if(!user) {
            return res.status(400).send("Username you have given is wrong");
        }   
        const passvalidate = await bcrypt.compare(req.body.password, user.password);
        if (!passvalidate){
            return res.status(200).send("password you have given is wrong");
        }
        else{
            const token = webtoken.sign({ _id: user._id }, process.env.SECRETTOKEN_FOR_STAFF);
            res.header("authorization", token).json({"toeken":token, "role": "staff"});
        }
    }

    catch(error){
        res.status(400).send("Invalid details");
    }
    }
    
exports.updatestaff = async(req,res) => {
    try{    
        const updatestaff = await Staffs.findByIdAndUpdate(
        req.params.id,
       { $set : req.body },
       { new : true })
       res.status(200).json(updatestaff);
     
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deletestaff = async(req,res) => {
    try{
        await Staffs.findByIdAndDelete(req.params.id);
        res.status(200).json("Staff has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
}
