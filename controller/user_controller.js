const Users = require("../models/users")
const bcrypt = require("bcrypt")
const webtoken = require("jsonwebtoken")

exports.viewuserbyid =  async(req, res) => {
  try{
    const user = await Users.findById(
    req.params.id
    );
   res.status(200).json(user);
 
} catch (err) {
    res.status(500).json(err);
}
}

exports.viewuser =  async(req, res) => {
  try{
    const user = await Users.findOne({_id: req.user});
    res.status(200).json(user);
    
} catch (err) {
    res.status(500).json(err);
}
}


exports.viewusers = async(req,res) => {
  try{
      const user = await Users.find();
     res.status(200).json(user);
   
  } catch (err) {
      res.status(500).json(err);
  }
}

exports.reguser = async(req,res) => {
  const saltRounds = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  const reguser = new Users({
    user_name : req.body.user_name,
    address : req.body.address,
    dob : req.body.dob,
    mobile_number : req.body.mobile_number,
    email : req.body.email,
    password: hashedPassword
  } );
  try{
      const saveduser = await reguser.save();
      res.status(200).json(saveduser);
  } catch (err) {
      res.status(500).json(err);
  }

}

exports.userlogin = async (req,res) =>{
  const user = await Users.findOne({
    email:req.body.email
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
          const token = webtoken.sign({ _id: user._id }, process.env.SECRETTOKEN_FOR_USER);
          res.header("Authorization", token).json({"toeken":token, "role": "user"});
      }
  }

  catch(error){
      res.status(400).send("Invalid details");
  }
  }


exports.updateuser = async(req,res) => {
  try{    
      const updateuser = await Users.findByIdAndUpdate(req.params.id,req.body);
     res.status(200).json("updated");
   
  } catch (err) {
      res.status(500).json(err);
  }
}

exports.deleteuser = async(req,res) => {
  try{
      await Users.findByIdAndDelete(
      req.params.id
      );
     res.status(200).json("user has been deleted");
   
  } catch (err) {
      res.status(500).json(err);
  }
}

exports.deletebyuser = async(req,res) => {
  try{
      await Users.findByIdAndDelete({_id: req.user});
     res.status(200).json("user has been deleted");
   
  } catch (err) {
      res.status(500).json(err);
  }
}
exports.updatebyuser = async(req,res) => {
  try{    
      const updatecurrentuser = await Users.findByIdAndUpdate({_id: req.user},
     { $set : req.body },
     { new : true })
     res.status(200).json(updatecurrentuser);
     if(updateuser!=null){
      res.send("UPDATE SUCCESSFULL" + updateuser)
     }
   
  } catch (err) {
      res.status(500).json(err);
  }
}
