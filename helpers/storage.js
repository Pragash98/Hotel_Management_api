const { storage } = require('debug/src/browser');
const multer = require('multer');

const diskstorage =  multer.diskStorage({
    destination: function(req,file,cb){
        console.log("file",file);
        console.log("reqqq",req);      
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
    console.log("fileee",file);    
    cb(null, new Date().toISOString() + file.originalname);
    }
});
const upload = multer({ storage :diskstorage}).single('roomImage');

module.exports = upload;
