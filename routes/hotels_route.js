const express = require('express')
const hotel_controller = require("../controller/hotel_controller")
const router = express.Router();
const verifystaff = require('../middleware/verify_staff_token')

router.use(express.json());

router.get("/view", hotel_controller.viewhotel);
router.get("/view/:id",verifystaff, hotel_controller.viewbyidhotel);
router.post("/create_hotel",verifystaff,hotel_controller.reghotel) ;  
router.put("/update/:id",verifystaff, hotel_controller.updatehotel); 
router.delete("/delete/:id",verifystaff, hotel_controller.deletehotel); 
router.post("/bulkupdate",verifystaff,hotel_controller.bulkupdate)
router.get("/viewbyrating",hotel_controller.viewbyrating); 
router.get("/viewbypage",hotel_controller.hotellimit); 
router.get("/pagination",hotel_controller.hotelpagination);
router.get("/hoteloffset",hotel_controller.hoteloffset);

module.exports = router