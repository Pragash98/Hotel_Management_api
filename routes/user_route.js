const express = require('express');
const moment = require('moment');
const router = express.Router();
const verifyuser = require("../middleware/verify_user_token")
const verifystaff = require("../middleware/verify_staff_token")
const verifyadmin =require("../middleware/verify_admin_token")
const usercontroller = require("../controller/user_controller")
router.use(express.json());

router.post('/create_user',usercontroller.reguser)
router.get('/view_users',verifystaff,usercontroller.viewusers)
router.get('/view_user',verifyuser,usercontroller.viewuser)
router.get('/view_userby/:id',verifyadmin,usercontroller.viewuserbyid)
router.put('/update_user/:id',verifyadmin,usercontroller.updateuser)
router.delete('/delete_user/:id',verifyadmin,usercontroller.deleteuser)
router.post('/loginuser',usercontroller.userlogin)
router.delete('/deleteuser',verifyuser,usercontroller.deletebyuser)
router.put('/updateuser',verifyuser,usercontroller.updatebyuser)

module.exports = router;
