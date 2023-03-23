const webtoken = require("jsonwebtoken");
require('dotenv').config();

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied");
  try {
    const verifyadmin = webtoken.verify(token, process.env.SECRETTOKEN_FOR_ADMIN);
    req.user = verifyadmin;
    next();
  } catch (err) {
    res.status(400).send("Invalid User");
    console.log(err)
  }
};
