const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const hotelRouter = require('./routes/hotels_route')
const roomRouter = require("./routes/rooms_route")
const staffRouter = require("./routes/staff_route")
const userRouter = require("./routes/user_route") 
const adminRouter = require("./routes/admin_route")
const bookingRouter = require("./routes/room_booking_route")
dotenv.config();
var app = express();


const connect = async ()=>{
  try{
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("db connected")
  }
  catch(error){
    console.log(err);
  }
}

app.use("/api/hotel",hotelRouter)
app.use("/api/admin",adminRouter)
app.use("/api/room",roomRouter)
app.use("/api/booking",bookingRouter)
app.use("/api/staff",staffRouter)
app.use("/api/user",userRouter)

app.listen(5000, ()=> {
    connect()
    console.log('server started')
})
