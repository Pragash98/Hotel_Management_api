HOTEL MANGEMENT is a hotel booking app created on MEAN stack.
Welcome to HOTEL MANGEMENT this is an Angular App where you can book hotels.

 M = MONGODB
 
 E = EXPRESS
 
 A = ANGULAR
 
 N = NODE.JS

BACKEND URLS:
ADMIN
VIEW ADMIN - http://localhost:5000/api/admin/view_admin

ADMIN VIEW BY ID - http://localhost:5000/api/admin/viewbyid/:id
CREATE ADMIN - http://localhost:5000/api/admin/create_admin
UDPDATE ADMIN BY ID - http://localhost:5000/api/admin/update_admin/:id
DELETE ADMIN - http://localhost:5000/api/admin/delete_admin/:id
ADMIN LOGIN - http://localhost:5000/api/admin/login_admin

BOOKING
BOOKING ROOM - http://localhost:5000/api/booking/bookroom
UPDATE BOOKING - http://localhost:5000/api/booking/updatebooking/:id
VIEW BOOKING - http://localhost:5000/api/booking/viewbookedroom
DELETE BOOKING - http://localhost:5000/api/booking/deletebooking/:id
VIEW USER BOOKING - http://localhost:5000/api/booking/viewusersbooking

HOTEL
VIEW HOTEL - http://localhost:5000/api/hotel/view
CREATE HOTEL - http://localhost:5000/api/hotel/create_hotel
DELETE HOTEL - http://localhost:5000/api/hotel/delete/:id
UPDATE HOTEL - http://localhost:5000/api/hotel/update/:id
VIEW HOTEL BY ID - http://localhost:5000/api/hotel/get/:id
BULK HOTEL - http://localhost:5000/api/hotel/bulkupdate
HOTELS HAVING RATING 5 - http://localhost:5000/api/hotel/viewbyrating
VIEW BY PAGE - http://localhost:5000/api/hotel/pagination?page=2&size=3
VIEW BY OFFSET - http://localhost:5000/api/hotel/hoteloffset?start=3&size=3

ROOM
VIEW ROOM - http://localhost:5000/api/room/viewroom
VIEW ROOM BY ID - http://localhost:5000/api/room/viewroom/:id
CREATE ROOM -  http://localhost:5000/api/room/create_room
UPDATE ROOM - http://localhost:5000/api/room/update_room/:id
DELETE ROOM - http://localhost:5000/api/room/delete_room/:id

STAFF
CREATE STAFF - http://localhost:5000/api/staff/createstaff
VIEW STAFF - http://localhost:5000/api/staff/viewstaff
UPDATE STAFF - http://localhost:5000/api/staff/update_staff/:id
DELETE STAFF - http://localhost:5000/api/staff/delete_staff/:id
LOGIN STAFF - http://localhost:5000/api/staff/login_staff

USER
CREATE USER - http://localhost:5000/api/user/create_user/
VIEW USER - http://localhost:5000/api/user/view_user
UPDATE USER - http://localhost:5000/api/user/update_user/:id
VIEW USER BY ID - http://localhost:5000/api/user/view_userby/:id
DELETE USER BY ID - http://localhost:5000/api/user/delete_user/:id
LOGIN USER - http://localhost:5000/api/user//loginuser
VIEW ALL USERS(STAFF) -  http://localhost:5000/api/staff/view_users
VIEW ALL USERS (ADMIN) - http://localhost:5000/api/admin/view_users
DELETE USER - http://localhost:5000/api/user/deleteuser
UPDATE CURRENT USER - http://localhost:5000/api/user/updateuser
