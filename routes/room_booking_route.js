const express = require("express")
const roombookingcontroller = require("../controller/roomsbooking_controller")
const router = express.Router();
router.use(express.json());
const verifytoken = require("../middleware/verify_user_token")
const verifystafftoken = require("../middleware/verify_staff_token")

router.get("/viewbookedroom",verifystafftoken,roombookingcontroller.viewbooking)

router.post("/bookroom",verifytoken,roombookingcontroller.bookroom)

router.put("/updatebooking/:id",verifytoken,roombookingcontroller.updatebooking)

router.get("/viewbookingfull",verifytoken,roombookingcontroller.viewbookingfull)

router.get("/viewusersbooking",verifytoken,roombookingcontroller.viewusersbooking)

router.delete("/deletebooking/:id",verifytoken,roombookingcontroller.deletebooking)

module.exports = router