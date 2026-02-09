const express = require("express");
const router = express.Router();
const verifiToken = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// admin can only access this route 
router.get("/admin", verifiToken,roleMiddleware("admin"),(req, res) => {
    res.json({ message: "Welcome, admin! You have access to this route."});
})

// user and admin access this route
router.get("/user", verifiToken, roleMiddleware("admin" ,"user"),(req,res) => {
    res.json({ message: "Welcome, user! You have access to this route."});
})

module.exports = router;
