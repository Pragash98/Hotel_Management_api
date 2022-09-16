const express = require('express')
const staffcontroller  = require('../controller/staff_controller')
const usercontroller = require("../controller/user_controller")
const router = express.Router();
router.use(express.json());
const verifystaff = require("../middleware/verify_staff_token")
const verifytoken = require("../middleware/verify_admin_token")


router.get("/viewstaff",verifytoken,staffcontroller.viewstaff );
router.get('/view_users',verifystaff,usercontroller.viewusers)

router.get("/viewstafff/:id",verifytoken,staffcontroller.viewbyidstaff);
router.post("/createstaff",verifytoken,staffcontroller.regstaff) ;  
router.put("/update_staff/:id",verifytoken,staffcontroller.updatestaff); 
router.delete("/delete_staff/:id",verifytoken,staffcontroller.deletestaff); 
router.post('/login_staff',staffcontroller.stafflogin)

module.exports = router