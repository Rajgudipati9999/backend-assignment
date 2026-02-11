const express = require("express");
const router = express.Router();
const verifiToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// admin can only access this route 
router.get("/admin", verifiToken ,roleMiddleware("admin"),(req, res) => {
   const getAdminData = {
    secretInfo: "This is admin data",
   } 
   
})

// user and admin access this route
router.get("/user", verifiToken, roleMiddleware("admin", "user"),(req,res) => {
    // get user profile
})
module.exports = router;
