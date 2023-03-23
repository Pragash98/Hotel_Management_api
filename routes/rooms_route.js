const express = require('express')
const room_controller = require("../controller/room_controller")
const router = express.Router();
const staffverify = require("../middleware/verify_staff_token")
const storage = require("../helpers/storage")


router.use(express.json());

router.get("/viewroom",room_controller.viewroom );
router.get("/viewroom/:id",room_controller.viewbyidroom);
router.post("/create_room",staffverify,storage,room_controller.regroom) ;  
router.put("/update_room/:id",staffverify,room_controller.updateroom); 
router.delete("/delete_room/:id",staffverify, room_controller.deleteroom); 

module.exports = router